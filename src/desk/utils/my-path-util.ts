import { MyLodashUtil, MyArrayUtil } from "@utils";

class MyPathUtil {
  static merge(...args: any): any[] | undefined {
    const path = MyArrayUtil.filterNullItem(MyLodashUtil.flattenDeep(args));
    if (path.length === 0) return undefined;
    return path;
  }
}

export { MyPathUtil };
