import MyLodashUtil from "./my-lodash-util";
import { MyArrayUtil } from "./my-array-util";

class MyPathUtil {
  static merge(...args: any): any[] | undefined {
    const path = MyArrayUtil.filterNullItem(MyLodashUtil.flattenDeep(args));
    if (path.length === 0) return undefined;
    return path;
  }
}

export default MyPathUtil;
