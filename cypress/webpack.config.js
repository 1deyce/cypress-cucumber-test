const webpack = require("webpack");

module.exports = {
    module: {
        rules: [
            {
                test: /\.feature$/,
                use: "cypress-cucumber-preprocessor/loader",
            },
        ],
    },
    resolve: {
        extensions: [".js", ".json", ".feature"],
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
