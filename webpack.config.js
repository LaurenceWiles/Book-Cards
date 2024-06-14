const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./index.html",
  filename: "index.html",
  inject: "body",
});

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // Handles CSS files
      },
    ],
  },
  plugins: [HtmlWebpackPluginConfig],
};
