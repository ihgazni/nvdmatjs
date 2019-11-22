const path = require("path");

module.exports = {
  entry: "./nvdmatjs.js",
  output: {
    filename: "nvdmatjs.js",
    path: path.resolve(__dirname, "dist"),
    library: "RNESTED",
    libraryTarget: "umd",
    globalObject: "this"
  },
  mode: "production",
  devtool: "source-map"
};

