import { Breadcrumb } from "antd";
import { PButton } from "../../component/antd/button";
import { MyStorage } from "../../../storage";
import { LoginPath } from "../../../consts/path/login";
import { MyContent } from "../../component/antd/my-layout";
import React from "react";
import { useHistory } from "react-router";

export const DeskPageContent = () => {
  const history = useHistory();

  return <MyContent className={"page-content"}>
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
    <div className="site-layout-content">
      <p style={{ height: 1000 }}>123</p>
      <PButton onClick={() => {
        MyStorage.Account.clear();
        history.push(LoginPath.LOGIN);
      }}>
        退出
      </PButton></div>
  </MyContent>
}
