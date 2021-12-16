import MyJsTypeUtil from "./my-js-type-util";

class MyArrayUtilClass {
  filterNullItem(array: any[]) {
    if (MyJsTypeUtil.isArray(array)) {
      return array.filter((item: any) => !MyJsTypeUtil.isNullOrUndefined(item));
    }
    return [];
  }

}

const  MyArrayUtil = new MyArrayUtilClass()
export default MyArrayUtil;
