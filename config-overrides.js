// config-overrides.js

const { override, fixBabelImports, addWebpackAlias } = require("customize-cra");
const path = require("path");
module.exports = override(
  fixBabelImports("import", {
    // antd 按需加载
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  }),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src"),
    "@consts": path.resolve(__dirname, "src/desk/consts"),
    "@storage": path.resolve(__dirname, "src/desk/storage"),
    "@utils": path.resolve(__dirname, "src/desk/utils"),
    "@service": path.resolve(__dirname, "src/desk/service"),
    "@ui": path.resolve(__dirname, "src/desk/ui"),
    "@page": path.resolve(__dirname, "src/desk/ui/page"),
    "@style": path.resolve(__dirname, "src/desk/ui/style"),
  })
);
