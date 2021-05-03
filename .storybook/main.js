const path = require("path");

module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app",
        "storybook-css-modules-preset",
    ],

    webpackFinal: async (config, { configType }) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            utility: path.resolve(__dirname, "..", "src", "utility"),
            styles: path.resolve(__dirname, "..", "src", "styles"),
            components: path.resolve(__dirname, "..", "src", "components"),
        };

        config.module.rules.push({
            test: /\.css$/,
            use: ["style-loader", "css-loader?modules=true"],
            options: {
                modules: {
                    compileType: "module",
                    mode: "local",
                    auto: true,
                    exportGlobals: true,
                    localIdentName: "[path][name]__[local]--[hash:base64:5]", // only use this long name in DEV!!!
                    localIdentContext: path.resolve(__dirname, "src"),
                    localIdentHashPrefix: "my-custom-hash",
                    namedExport: true,
                    exportLocalsConvention: "camelCase",
                    exportOnlyLocals: false,
                },
            },
            include: path.resolve(__dirname, "../"),
        });

        // Return the altered config
        return config;
    },
};
