import { ConfigProvider } from "antd";
import React from "react";
import "./App.css";
import RouterEntry from "./desk/router";
import Styles from "./desk/ui/style/index";
import zhCN from "antd/lib/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import "antd/dist/antd.variable.min.css";

moment.locale("zh-cn");

ConfigProvider.config({
  theme: {
    // primaryColor: "#25b864",
  },
});

function App() {
  const GlobalStyle = Styles.createGlobalStyles("");
  console.log(process.env);
  return (
    <>
      <GlobalStyle/>
      <ConfigProvider locale={zhCN}>
        <RouterEntry/>
      </ConfigProvider>
    </>
  );
}

export default App;
