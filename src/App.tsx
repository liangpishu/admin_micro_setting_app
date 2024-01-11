import { ConfigProvider } from "antd";
import React from "react";
import "./App.css";
import RouterEntry from "./desk/router";
import Styles from "./desk/ui/style/index";
import zhCN from "antd/lib/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

dayjs.locale("zh-cn");

ConfigProvider.config({
  theme: {
    // primaryColor: "#25b864",
  },
});

function App() {
  const GlobalStyle = Styles.createGlobalStyles("");
  console.log(process);
  return (
    <>
      <GlobalStyle />
      <ConfigProvider locale={zhCN}>
        <RouterEntry />
      </ConfigProvider>
    </>
  );
}

export default App;
