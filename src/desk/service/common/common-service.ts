import { Apis } from "@/desk/consts/apis";
import Http from "../../http";
import { MyStringUtil } from "@utils";
import { IOptionItem } from "@types";

interface ILoginProps {
  userName: string;
  pwd: string;
}

class CommonService {
  static async getMasterTable(tableName?: string): Promise<IOptionItem[]> {
    if (MyStringUtil.isBlank(tableName)) return [];
    const resp = await Http.get(`/json/mastertable/${tableName}.json`);
    return resp.data ?? [];
  }

  static async login(props: ILoginProps): Promise<{ data: Record<string, unknown> }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { userName: "liang", authKey: "123" } });
      }, 3000);
    });
    // return Http.post(Apis.login, props).then((res) => {
    //   return res.data;
    // });
  }
}

export { CommonService };
