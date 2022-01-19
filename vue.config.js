
const webpack = require("webpack");
const path = require('path');

module.exports = {
    productionSourceMap: false,
    lintOnSave: false,
    filenameHashing: true,
    assetsDir: "./",

    css: {
        extract: {ignoreOrder: true},
        loaderOptions: {
            // pass options to sass-loader
            scss: {
                prependData: `@import "~@/scss/variables.scss";`,
            },
        },
    },
}
