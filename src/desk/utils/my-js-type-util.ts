class MyJsTypeUtil {
  static isString(o: any): o is string {
    return Object.prototype.toString.call(o).slice(8, -1) === "String";
  }

  static isNumber(o: any): o is number {
    return Object.prototype.toString.call(o).slice(8, -1) === "Number";
  }

  static isBoolean(o: any): o is boolean {
    return Object.prototype.toString.call(o).slice(8, -1) === "Boolean";
  }

  static isFunction(o: any): o is Function {
    return Object.prototype.toString.call(o).slice(8, -1) === "Function";
  }

  static isNull(o: any): o is null {
    return Object.prototype.toString.call(o).slice(8, -1) === "Null";
  }

  static isUndefined(o: any): o is undefined {
    return Object.prototype.toString.call(o).slice(8, -1) === "Undefined";
  }

  static isNullOrUndefined(o: any) {
    return this.isNull(o) || this.isUndefined(o);
  }

  static isObject(o: any): o is object {
    return Object.prototype.toString.call(o).slice(8, -1) === "Object";
  }

  static isArray(o: any): o is any[] {
    return Array.isArray(o);
  }

  static isDate(o: any): o is Date {
    return Object.prototype.toString.call(o).slice(8, -1) === "Date";
  }

  static isError(o: any): o is Error {
    return Object.prototype.toString.call(o).slice(8, -1) === "Error";
  }

  static isSymbol(o: any): o is Symbol {
    return Object.prototype.toString.call(o).slice(8, -1) === "Symbol";
  }

  static isPromise(o: any): o is Promise<any> {
    return Object.prototype.toString.call(o).slice(8, -1) === "Promise";
  }

  static isSet(o: any): o is Set<any> {
    return Object.prototype.toString.call(o).slice(8, -1) === "Set";
  }

  static isFormData(o: any): o is FormData {
    return Object.prototype.toString.call(o).slice(8, -1) === "FormData";
  }
}

export default MyJsTypeUtil;
