import { AdminPath } from "@/desk/consts/path";
import { DashboardPath } from "@/desk/consts/path/dashboard";
import { MyArrayUtil } from "@utils";

interface IMenuItem {
  itemCode: string;
  itemName: string;
  path: string;
  children?: IMenuItem[];
}

type TFlatMenuItems = Omit<IMenuItem, "children">[];

class MenuUtils {
  static filterMenuItems(): IMenuItem[] {
    return MenuItems;
  }

  static flatMenu() {
    const flatFunc = (menus: IMenuItem[]): TFlatMenuItems => {
      return menus.reduce((acc, x) => {
        if (MyArrayUtil.isNotEmpty(x.children)) {
          const newCur = {
            itemCode: x.itemCode,
            itemName: x.itemName,
            path: x.path,
          };
          return acc.concat(newCur, flatFunc(x.children!));
        }
        return acc.concat(x);
      }, [] as TFlatMenuItems);
    };
    return flatFunc(MenuItems);
  }

  static getBreadcrumbNameMap() {
    const flatMenus = this.flatMenu();
    console.log(flatMenus, "flatMenus");

    return flatMenus.reduce((acc: any, cur) => {
      acc[cur.path] = cur.itemName;
      return acc;
    }, {});
  }
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
      {
        itemCode: "admin0102",
        itemName: "Setting",
        path: AdminPath.USER_SETTING,
      },
    ],
  },
];
export type { IMenuItem };
export { MenuUtils };
