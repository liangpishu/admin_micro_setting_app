import { MyHeader } from "../antd/my-layout";
import { Menu } from "antd";
import React, { FC } from "react";

export const DeskPageHeader: FC = () => {
  return <MyHeader>
    <div className="logo"/>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
      {new Array(15).fill(null).map((_, index) => {
        const key = index + 1;
        return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
      })}
    </Menu>
  </MyHeader>;
};
