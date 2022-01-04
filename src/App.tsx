import { ConfigProvider } from "antd";
import React from "react";
import "./App.css";
import RouterEntry from "./desk/router";
import Styles from "./desk/ui/style/index";
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

function App() {
  const GlobalStyle = Styles.createGlobalStyles("");

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
