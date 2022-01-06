import { MyHeader } from "../antd/my-layout";
import React, { FC } from "react";
import MenuComponent from "../menu";

export const DeskPageHeader: FC = () => {
  return <MyHeader>
    <div className="logo"/>
    <MenuComponent/>
  </MyHeader>;
};
