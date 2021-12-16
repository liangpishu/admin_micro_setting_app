class MyJsTypeUtilClass {
  isString(o: any): o is string {
    return Object.prototype.toString.call(o).slice(8, -1) === "String";
  }

  isNumber(o: any): o is number {

    return Object.prototype.toString.call(o).slice(8, -1) === "Number";
  }

  isBoolean(o: any): o is boolean {
    return Object.prototype.toString.call(o).slice(8, -1) === "Boolean";
  }

  isFunction(o: any): o is Function {
    return Object.prototype.toString.call(o).slice(8, -1) === "Function";
  }

  isNull(o: any): o is null {
    return Object.prototype.toString.call(o).slice(8, -1) === "Null";
  }

  isUndefined(o: any): o is undefined {
    return Object.prototype.toString.call(o).slice(8, -1) === "Undefined";
  }

  isNullOrUndefined(o: any) {
    return this.isNull(o) || this.isUndefined(o);
  }

  isObject(o: any): o is object {
    return Object.prototype.toString.call(o).slice(8, -1) === "Object";
  }

  isArray(o: any): o is any[] {
    return Array.isArray(o);
  }

  isDate(o: any): o is Date {
    return Object.prototype.toString.call(o).slice(8, -1) === "Date";
  }

  isError(o: any): o is Error {
    return Object.prototype.toString.call(o).slice(8, -1) === "Error";
  }

  isSymbol(o: any): o is Symbol {
    return Object.prototype.toString.call(o).slice(8, -1) === "Symbol";
  }

  isPromise(o: any): o is Promise<any> {
    return Object.prototype.toString.call(o).slice(8, -1) === "Promise";
  }

  isSet(o: any): o is Set<any> {
    return Object.prototype.toString.call(o).slice(8, -1) === "Set";
  }

  isFormData(o: any): o is FormData {
    return Object.prototype.toString.call(o).slice(8, -1) === "FormData";
  }
}

const MyJsTypeUtil =  new MyJsTypeUtilClass();
export default MyJsTypeUtil;
