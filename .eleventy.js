const { EleventyEdgePlugin } = require("@11ty/eleventy")

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/")
    eleventyConfig.addWatchTarget("./src/css/")
    eleventyConfig.addPassthroughCopy("./src/js/")

    eleventyConfig.addPlugin(EleventyEdgePlugin);
    
    return {
        dir: {
            input: "src",
            output: "build"
        }
    }
}