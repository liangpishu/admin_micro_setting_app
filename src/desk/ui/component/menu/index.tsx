import { Menu } from "antd";
import React, { FC } from "react";
import { DashboardPath } from "../../../consts/path/dashboard";

const MenuComonent: FC = (props) => {
  return <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
    {MenuItems.map((item, index) => {
      const key = index + 1;
      return <Menu.Item key={item.itemCode}>
        {item.itemName}
      </Menu.Item>;
    })}
  </Menu>
}

export default Menu;

interface IMenuItem {
  itemCode: string;
  itemName: string;
  path: string;
}

const MenuItems: IMenuItem[] = [
  {
    itemCode: "dashboard01",
    itemName: "DashBoard",
    path: DashboardPath.INDEX
  }
]