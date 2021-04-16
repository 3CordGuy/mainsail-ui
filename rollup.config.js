import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { visualizer } from "rollup-plugin-visualizer";

import pkg from "./package.json";

const esModuleBundling = {
    input: "src/components/core/index.js",
    output: [
        {
            file: pkg.module,
            format: "es",
            sourcemap: true,
        },
    ],
    plugins: [
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
        resolve(),
        commonjs(),
        process.env.NODE_ENV !== "production" &&
            visualizer({
                filename: "bundle-visualizer.html",
                open: true,
                projectRoot: "/src",
            }),
    ],
};

// Core CommonJS export (no tree shaking)
const cjsBundling = {
    input: "src/components/core/index.js",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: true,
            // exports: "auto",
        },
    ],
    plugins: [
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
        resolve(),
        commonjs(),
    ],
};

export default [cjsBundling, esModuleBundling];
