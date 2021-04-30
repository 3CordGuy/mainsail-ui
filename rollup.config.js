import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import alias from "@rollup/plugin-alias";
import { visualizer } from "rollup-plugin-visualizer";

import pkg from "./package.json";

const path = require("path");
const customResolver = resolve({
    extensions: [".mjs", ".js", ".jsx", ".json", ".sass", ".scss"],
});
const projectRootDir = path.resolve(__dirname);
const warningSuppressionFilter = /imported from external module 'react'/;

const plugins = [
    peerDepsExternal(),
    postcss({
        use: ["sass"],
        config: {
            path: "./postcss.config.js",
        },
        minimize: true,
        inject: {
            insertAt: "bottom",
        },
    }),
    babel({ exclude: "node_modules/**", babelHelpers: "bundled" }),
    alias({
        entries: [
            {
                find: "utility",
                replacement: path.resolve(projectRootDir, "src/utility"),
                customResolver,
            },
            {
                find: "components",
                replacement: path.resolve(projectRootDir, "src/components"),
                customResolver,
            },
            {
                find: "styles",
                replacement: path.resolve(projectRootDir, "src/styles"),
                customResolver,
            },
        ],
    }),
    resolve(),
    commonjs(),
    process.env.NODE_ENV !== "production" &&
        visualizer({
            filename: "bundle-viz.html",
            projectRoot: "/src",
        }),
];
/*
 *
 *  This specific warning suppression pattern exists because
 *  some 3rd-party deps import unused modules.
 *
 *  Rollup is smart enough to not include them, but
 *  the warning provided will fail the build since we
 *  run with a strict --failAfterWarnings
 *
 *  If future dependencies provide more issues, we can re-evaluate
 */
const onwarn = function (message) {
    const str = message.toString();
    if (warningSuppressionFilter.test(str)) {
        return;
    }
    console.error(message);
};

/**
 * We have three sets of bundling
 * - Per Module Files ES - for independent module consumption
 * - Full Library ES - for the whole kitchen sink in es module form
 * - CJS - old school fallback
 */
const modularizedExportEs = {
    input: [
        // plop inserts new components
        "src/components/AutoGrid/AutoGrid.js",
        "src/components/Badge/Badge.js",
        "src/components/Button/Button.js",
        "src/components/Checkbox/Checkbox.js",
        "src/components/FormControl/FormControl.js",
        "src/components/FormHelpText/FormHelpText.js",
        "src/components/FormInputOptions/FormInputOptions.js",
        "src/components/FormLabel/FormLabel.js",
        "src/components/Icon/Icon.js",
        "src/components/Input/Input.js",
        "src/components/Modal/Modal.js",
        "src/components/Radio/Radio.js",
        "src/components/Spinner/Spinner.js",
        "src/components/Textarea/Textarea.js",
        "src/components/Tooltip/Tooltip.js",
        "src/components/Transition/Transition.js",
    ],
    output: {
        sourcemap: true,
        format: "esm",
        dir: "dist",
    },
    plugins,
    onwarn,
};

const fullExportEs = {
    input: "src/index.js",
    output: {
        sourcemap: true,
        format: "esm",
        file: pkg.module,
    },
    plugins,
    onwarn,
};

const exportCjs = {
    input: "src/index.js",
    output: {
        sourcemap: true,
        format: "cjs",
        file: pkg.main,
    },
    plugins,
    onwarn,
};

export default [fullExportEs, modularizedExportEs, exportCjs];
