// webpack.dev.js
const { merge } = require("webpack-merge");
const base = require("./webpack.base.js");

module.exports = merge(base, {
  mode: "development", // 开发模式
  devServer: {
    host: "localhost",
    port: 8090,
    https: false,
    hot: true,
    compress: false,//gzip压缩，开发环境下不用开启，提升热更新的速度
    historyApiFallback: true,//解决history路由一刷新变404的问题
    open: true, // 编译完自动打开浏览器
  },
  stats: "errors-only", // 减少控制台输出构建信息
});
