import { Liquid } from "liquidjs";
import navigationPlugin from "@11ty/eleventy-navigation";

export default async function(eleventyConfig) {
	let options = {
		jsTruthy: true,
		extname: ".liquid",
		dynamicPartials: false,
		strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
		root: ["_includes"],
	};

	eleventyConfig.setLibrary("liquid", new Liquid(options));

	eleventyConfig.addPlugin(navigationPlugin);
};

export const config = {
	// Control which files Eleventy will process
	// e.g.: *.md, *.njk, *.html, *.liquid
	templateFormats: [
		"md",
		"njk",
		"html",
		"liquid",
		"11ty.js",
	],

	// Pre-process *.md files with: (default: `liquid`)
	markdownTemplateEngine: "liquid",

	// Pre-process *.html files with: (default: `liquid`)
	htmlTemplateEngine: "liquid",

	dir: {
		input: "content",          // default: "."
		includes: "../_includes",  // default: "_includes" (`input` relative)
		data: "../_data",          // default: "_data" (`input` relative)
		output: "_site"
	},
};
