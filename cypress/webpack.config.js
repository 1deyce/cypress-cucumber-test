const path = require("path");
const webpack = require("webpack");

module.exports = {
    module: {
        rules: [
            {
                test: /\.feature$/,
                use: "cypress-cucumber-preprocessor/loader",
            },
            // Other loaders can be added here
        ],
    },
    resolve: {
        extensions: [".js", ".json", ".feature"], // Make sure to include .feature here
        fallback: {
            path: require.resolve("path-browserify"),
            process: require.resolve("process/browser"),
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
    ],
};
