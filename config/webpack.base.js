const { appHtml, appIndexJs, appBuild, appSrc } = require("./myPath");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const WebpackBar = require("webpackbar");
const webpack = require("webpack");
const ProcessProfile = require.resolve("process/browser");

module.exports = {
  entry: appIndexJs,
  output: {
    path: appBuild,
    filename: "static/js/[name].[contenthash:8].js",
    chunkFilename: "js/[name].[contenthash:8].chunk.js",
    publicPath: "/",
  },
  cache: {
    type: "filesystem",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: appHtml,
    }),
    new WebpackBar({
      basic: false,
      profile: false,
    }),
    new webpack.ProvidePlugin({
      process: ProcessProfile, // 必须配置，不然会报错【Uncaught ReferenceError: process is not defined】
    }),
  ],
  module: {
    rules: [{
      test: /\.(js|jsx|ts|tsx|mjs)$/, // 使用正则来匹配js或jsx文件
      exclude: /node_modules/, // 排除node_modules目录
      use: {
        loader: "babel-loader", // Babel加载器
        options: {
          cacheDirectory: true,
          // cacheCompression: false,
        },
      },
    },
      {
        test: /\.css$/, // 匹配CSS文件
        use: ["style-loader", "css-loader", "postcss-loader"], // CSS加载器
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // 匹配图片文件
        use: ["file-loader"], // 文件加载器
      },
    ],
  },
  resolve: {
    // 这句不能加，不然查找包的时候不会先查找自己目录的包，会直接去找根目录
    // modules: [paths.appNodeModules],
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    alias: {
      ["@"]: path.resolve(appSrc),
      "@consts": path.resolve(appSrc, "desk/consts"),
      "@storage": path.resolve(appSrc, "desk/storage"),
      "@utils": path.resolve(appSrc, "desk/utils"),
      "@service": path.resolve(appSrc, "desk/service"),
      "@ui": path.resolve(appSrc, "desk/ui"),
      "@hooks": path.resolve(appSrc, "desk/ui/hooks"),
      "@page": path.resolve(appSrc, "desk/ui/page"),
      "@style": path.resolve(appSrc, "desk/ui/style"),
      "@http": path.resolve(appSrc, "desk/http"),
      "@types": path.resolve(appSrc, "desk/type"),
      "@form-components": path.resolve(appSrc, "desk/ui/component/antd/form"),
      "@components": path.resolve(appSrc, "desk/ui/component"),
    },
  },
};
