const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

module.exports = withPlugins([
  [withSass], 
  [withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
});

const sitemap = require("nextjs-sitemap-generator");
sitemap({
  baseUrl: "https://your-url.com",
  pagesDirectory: __dirname + "/pages",
  targetDirectory: "public/",
});
