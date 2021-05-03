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
            include: path.resolve(__dirname, "../"),
        });

        // Return the altered config
        return config;
    },
};
