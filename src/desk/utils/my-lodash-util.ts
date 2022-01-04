import _, { PropertyPath } from "lodash";


class MyLodashUtilClass {
  get(object: any, path: PropertyPath, defaultValue?: any) {
    return _.get(object, path, defaultValue);
  }

  isEmpty(value: any): boolean {
    return _.isEmpty(value);
  }

  flattenDeep(array: any) {
    return _.flattenDeep(array);
  }
}

const MyLodashUtil = new MyLodashUtilClass();

export default MyLodashUtil;
