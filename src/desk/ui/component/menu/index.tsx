import { Menu } from "antd";
import React, { FC, useCallback, useMemo } from "react";
import { useHistory } from "react-router";
import { MyLodashUtil } from "@utils";
import { MenuUtils } from "@/desk/utils/menu-utils";
import { MenuInfo } from "rc-menu/lib/interface";
import { useLocation } from "react-router-dom";
import { useMenuOpenKeys } from "@hooks/use-menu-open-keys";

const MenuComponent: FC = (props) => {
  const history = useHistory();
  const location = useLocation();
  const finalMenuItems = MenuUtils.filterMenuItems();
  const handleClick = useCallback(
    (info: MenuInfo) => {
      history.push(info.key);
    },
    [history]
  );
  const menus = useMemo(
    () =>
      finalMenuItems.map((it) => {
        let children;
        if (!MyLodashUtil.isEmpty(it.children)) {
          children = it.children?.map((child) => ({ label: child.itemName, key: child.path }));
        }
        return {
          label: it.itemName,
          key: it.path,
          children,
        };
      }),
    []
  );
  const [openKeys, setOpenKeys] = useMenuOpenKeys(menus);
  return (
    <Menu
      className={"page-header-menu"}
      theme={"dark"}
      mode="inline"
      onClick={handleClick}
      selectedKeys={[location.pathname]}
      openKeys={openKeys}
      items={menus}
      onOpenChange={(keys) => {
        setOpenKeys(keys);
      }}
    ></Menu>
  );
};

export default MenuComponent;
