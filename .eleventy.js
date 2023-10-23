const CleanCSS = require("clean-css");
const { minify } = require("terser");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPairedShortcode("cssmin", function(input) {
        return new CleanCSS({}).minify(input).styles;
    });
    
    eleventyConfig.addPairedAsyncShortcode("jsmin", async function(input) {
        const minified = await minify(input);
        return minified.code;
    });

    eleventyConfig.addPassthroughCopy("src/favicon.png");
    eleventyConfig.addPassthroughCopy("src/img/*");

    return {
        dir: {
            input: "src",
            output: "build"
        }
    };
}
