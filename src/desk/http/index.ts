import axios, { AxiosRequestConfig, Method } from "axios";
import Message from "../service/message";
import { AccountService } from "../service/user";

interface IConfig extends AxiosRequestConfig {
  loading?: boolean,
  isSilent?: boolean
}

class HttpClass {
  get(url: string, config?: IConfig) {
    return this.ajax(url, "get", config);
  }

  ajax(url: string, method: Method, config?: IConfig) {
    let headers = config?.headers || {};
    const authKey = AccountService.getAuthKey();
    headers = {
      ...headers,
      AuthKey: authKey
    }
    return axios({
      method: method,
      url,
      ...(config || {}),
      headers
    }).then((res) => {
      if (!config?.isSilent && res.status !== 200) {
        Message.error({ content: "请求失败了, 请稍后再试" });
      }
      return res;
    }).catch((e) => {
      if (!config?.isSilent) {
        Message.error({ content: "请求失败了, 请稍后再试" });
      }
      throw e;
    });
  }
}

const Http = new HttpClass();

export default Http;
