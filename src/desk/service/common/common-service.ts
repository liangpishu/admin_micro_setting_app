import Http from "../../http";
import MyStringUtil from "../../utils/my-string-util";

class CommonService {
  static async getMasterTable(tableName?: string) {
    if (MyStringUtil.isBlank(tableName)) return [];
    return Http.get(`/json/mastertable/${tableName}.json`).then((res) => {
      return res.data;
    });
  }
}

export { CommonService }
