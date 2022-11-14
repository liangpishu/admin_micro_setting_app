import MyJsTypeUtil from "./my-js-type-util";

class MyArrayUtil {
  static filterNullItem(array: any[]) {
    if (MyJsTypeUtil.isArray(array)) {
      return array.filter((item: any) => !MyJsTypeUtil.isNullOrUndefined(item));
    }
    return [];
  }

  static isEmpty(array: any[]) {
    return;
  }
}

export { MyArrayUtil };
