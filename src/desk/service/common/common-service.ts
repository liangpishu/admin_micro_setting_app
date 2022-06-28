import { Apis } from "desk/consts/apis";
import Http from "../../http";
import MyStringUtil from "../../utils/my-string-util";

interface ILoginProps {
  userName: string;
  pwd: string;
}
class CommonService {
  static async getMasterTable(tableName?: string) {
    if (MyStringUtil.isBlank(tableName)) return [];
    return Http.get(`/json/mastertable/${tableName}.json`).then((res) => {
      return res.data;
    });
  }

  static async login(props: ILoginProps) {
    return Http.post(Apis.login, props).then((res) => {
      return res.data;
    });
  }
}

export { CommonService };
