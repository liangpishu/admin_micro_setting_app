import _, { PropertyPath } from "lodash";


class MyLodashUtil {
  static get(object: any, path: PropertyPath, defaultValue?: any) {
    return _.get(object, path, defaultValue);
  }

  static isEmpty(value: any): boolean {
    return _.isEmpty(value);
  }

  static flattenDeep(array: any) {
    return _.flattenDeep(array);
  }
}

export { MyLodashUtil };
