import { useEffect, useMemo, useState } from "react";
import { MyLodashUtil } from "@utils";
import { useLocation } from "react-router-dom";

type ItemType = {
  label: string;
  key: string;
  children?: ItemType[];
};
type OpenkeysHookReturnType = [string[], (newValue: string[]) => void];
const useMenuOpenKeys = (allMenus: ItemType[]): OpenkeysHookReturnType => {
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  useEffect(() => {
    const { pathname } = location;
    let findOpenKeys: string[] = [];
    const findKeysFunc = (currentMenus: Array<ItemType>) => {
      currentMenus.forEach((it) => {
        if (pathname.startsWith(it.key) && !MyLodashUtil.isEmpty(it.children)) {
          findOpenKeys = [...findOpenKeys, it.key];
          findKeysFunc(it.children! as Array<ItemType>);
        }
      });
    };
    findKeysFunc(allMenus);
    setOpenKeys(findOpenKeys);
  }, []);
  return [openKeys, setOpenKeys];
};

export { useMenuOpenKeys };
