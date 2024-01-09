module.exports = {
  presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }], "@babel/preset-typescript"],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
    ["@babel/plugin-transform-flow-strip-types"],
    [
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
      },
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true,
      },
    ],
    ...(process.env.NODE_ENV === "development" ? ["@babel/plugin-transform-react-jsx-source"] : []),
  ],
};
