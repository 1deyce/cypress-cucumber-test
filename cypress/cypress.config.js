const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            const options = {
                webpackOptions: require("./webpack.config"),
                watchOptions: {},
            };

            on("file:preprocessor", webpack(options));
            return config;
        },
        baseUrl: "https://ecotrack-solutions.netlify.app",
        specPattern: "**/*.feature",
        supportFile: false,
    },
});
