import { Menu } from "antd";
import React, { FC, useCallback, useMemo } from "react";
import { useHistory } from "react-router";
import MyLodashUtil from "../../../utils/my-lodash-util";
import { MenuUtils } from "@/desk/utils/menu-utils";

const { SubMenu } = Menu;

const MenuComponent: FC = (props) => {
  const history = useHistory();
  const handleClick = useCallback(
    (e) => {
      history.push(e.key);
    },
    [history]
  );
  const menus = useMemo(() => MenuUtils.filterMenuItems(), []);
  return (
    <Menu
      className={"page-header-menu"}
      theme={"dark"}
      mode="inline"
      onClick={handleClick}
      selectedKeys={[window.location.pathname]}
    >
      {menus.map((item, index) => {
        if (!MyLodashUtil.isEmpty(item.children)) {
          return (
            <SubMenu
              popupOffset={[-20, 5]}
              key={item.path}
              title={item.itemName}
            >
              {item.children?.map((child) => {
                return <Menu.Item key={child.path}>{child.itemName}</Menu.Item>;
              })}
            </SubMenu>
          );
        }
        return (
          <Menu.Item key={item.path} onClick={() => handleClick(item.path)}>
            {item.itemName}
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default MenuComponent;
