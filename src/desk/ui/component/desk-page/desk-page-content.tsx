import { Breadcrumb } from "antd";
import { MyContent } from "../antd/my-layout";
import React, { FC } from "react";

export const DeskPageContent: FC = (props) => {
  const { children } = props;
  return <MyContent className={"page-content"}>
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
    <div className="site-layout-content">
      {children}
    </div>
  </MyContent>
}
