import { MySider } from "../antd/my-layout";
import { FC } from "react";
import MenuComponent from "../menu";
import { SiderProps } from "antd";
export const DeskPageSider: FC<SiderProps> = (props) => {
  return (
    <MySider className={"page-sider"} {...props}>
      <div className="logo" />
      <MenuComponent />
    </MySider>
  );
};
