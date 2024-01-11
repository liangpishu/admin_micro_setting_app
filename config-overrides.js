// config-overrides.js
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");
const addCustomize = () => (config) => {
  if (process.env.NODE_ENV === "production") {
    // 关闭sourceMap
    config.devtool = false;
    // 添加js打包gzip配置
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /.js$|.css$/,
        threshold: 1024,
      })
    );
  } else {
    config.devtool = "source-map";
  }
  return config;
};
module.exports = override(
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src"),
    "@consts": path.resolve(__dirname, "src/desk/consts"),
    "@storage": path.resolve(__dirname, "src/desk/storage"),
    "@utils": path.resolve(__dirname, "src/desk/utils"),
    "@service": path.resolve(__dirname, "src/desk/service"),
    "@ui": path.resolve(__dirname, "src/desk/ui"),
    "@hooks": path.resolve(__dirname, "src/desk/ui/hooks"),
    "@page": path.resolve(__dirname, "src/desk/ui/page"),
    "@style": path.resolve(__dirname, "src/desk/ui/style"),
    "@http": path.resolve(__dirname, "src/desk/http"),
    "@types": path.resolve(__dirname, "src/desk/type"),
    "@form-components": path.resolve(__dirname, "src/desk/ui/component/antd/form"),
    "@components": path.resolve(__dirname, "src/desk/ui/component"),
  }),
  addCustomize()
);
