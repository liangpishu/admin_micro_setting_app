import MyJsTypeUtil from "./my-js-type-util";

class MyStringUtil {
  static isBlank(value?: string) {
    if (value === "" || MyJsTypeUtil.isNullOrUndefined(value)) {
      return true;
    }
    return false;
  }

  static isNotBlank(value?: string) {
    return !this.isBlank(value);
  }
}

export default MyStringUtil;
