import MyJsTypeUtil from "./my-js-type-util";

class MyArrayUtil {
  static filterNullItem<T>(array: Array<T>): Array<T> {
    if (MyJsTypeUtil.isArray(array)) {
      return array.filter((item) => !MyJsTypeUtil.isNullOrUndefined(item));
    }
    return [];
  }
  static isEmpty<T>(array?: Array<T>): boolean {
    return Array.isArray(array) && array.length === 0;
  }

  static isNotEmpty<T>(array?: Array<T>): boolean {
    if (!array) return false;
    return !this.isEmpty(array);
  }
}

export { MyArrayUtil };
