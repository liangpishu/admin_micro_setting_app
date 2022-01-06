import { Menu } from "antd";
import React, { FC, useCallback } from "react";
import { DashboardPath } from "../../../consts/path/dashboard";
import { AdminPath } from "../../../consts/path/admin";
import { useHistory } from "react-router";
import MyLodashUtil from "../../../utils/my-lodash-util";

const { SubMenu } = Menu;

const MenuComponent: FC = (props) => {
  const history = useHistory();
  const handleClick = useCallback((e) => {
    console.log(e, "e");
    history.push(e.key);
  }, [history]);
  return <Menu theme={"dark"} mode="horizontal" onClick={handleClick} selectedKeys={[window.location.pathname]}>
    {MenuItems.map((item, index) => {
      if (!MyLodashUtil.isEmpty(item.children)) {
        return <SubMenu popupOffset={[-20, 5]} key={item.path} title={item.itemName}>
          {
            item.children?.map((child) => {
              return <Menu.Item key={child.path}>{child.itemName}</Menu.Item>;
            })
          }
        </SubMenu>;
      }
      return <Menu.Item key={item.path} onClick={() => handleClick(item.path)}>
        {item.itemName}
      </Menu.Item>;
    })}
  </Menu>;
};

export default MenuComponent;

interface IMenuItem {
  itemCode: string;
  itemName: string;
  path: string;
  children?: IMenuItem[];
}

const MenuItems: IMenuItem[] = [
  {
    itemCode: "dashboard01",
    itemName: "DashBoard",
    path: DashboardPath.INDEX,
  },
  {
    itemCode: "admin01",
    itemName: "Admin",
    path: AdminPath.INDEX,
    children: [
      {
        itemCode: "admin0101",
        itemName: "User Info",
        path: AdminPath.USER_INFO,
      },
    ],
  },
];
