import { MyJsTypeUtil } from "@utils";

class MyStringUtil {
  static isBlank(value?: string) {
    return value === "" || MyJsTypeUtil.isNullOrUndefined(value);
  }

  static isNotBlank(value?: string) {
    return !this.isBlank(value);
  }
}

export { MyStringUtil };
