const path = require("path");

module.exports = (env) => {
  return {
    context: path.resolve(__dirname, "src"),
    entry: "./index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "learning_webpack_bundle.js",
    },
    mode: "development",
    devServer: {
      contentBase: "./public",
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.m?jsx$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
  };
};
