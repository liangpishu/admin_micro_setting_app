import axios, { AxiosRequestConfig, Method } from "axios";
import MyLodashUtil from "desk/utils/my-lodash-util";
import MyStringUtil from "desk/utils/my-string-util";
import Message from "../service/message";
import { AccountService } from "../service/user";

interface IConfig extends AxiosRequestConfig {
  loading?: boolean;
  isSilent?: boolean;
}

class HttpClass {
  constructor() {
    axios.interceptors.response.use(
      function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        if (MyLodashUtil.get(response.data, "respCode") !== "0000") {
          return Promise.reject(response.data);
        }
        return response;
      },
      function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
      }
    );
  }

  get(url: string, data?: any, config?: IConfig) {
    return this.ajax(url, "get", data, config);
  }

  post(url: string, data?: any, config?: IConfig) {
    return this.ajax(url, "post", data, config);
  }

  ajax(url: string, method: Method, data?: any, config?: IConfig) {
    let headers = config?.headers || {};
    const authKey = AccountService.getAuthKey();

    const newUrl = this.getServiceLocation(url);
    headers = {
      ...headers,
      AuthKey: authKey,
    };
    return axios({
      method: method,
      url: newUrl,
      data,
      ...(config || {}),
      headers,
    })
      .then((res) => {
        if (!config?.isSilent && res.status !== 200) {
          Message.error({ content: "请求失败了, 请稍后再试" });
        }
        console.log(res, "http");

        return res;
      })
      .catch((e) => {
        if (!config?.isSilent) {
          let respMsg = MyLodashUtil.get(e, "respMsg", "");
          if (MyStringUtil.isBlank(respMsg)) {
            respMsg = "请求失败了, 请稍后再试";
          }
          Message.error({ content: respMsg });
        }
        throw e;
      });
  }

  getServiceLocation(relativePath: string) {
    if (
      MyStringUtil.isNotBlank(relativePath) &&
      (relativePath.startsWith("http") || relativePath.startsWith("https"))
    ) {
      return relativePath;
    }
    const location = window.location;
    const protocol = location.protocol; // 协议
    let port = location.port;
    let hostname = location.hostname;
    if (MyStringUtil.isNotBlank(process.env.REACT_APP_AJAX_SERVER_PORT)) {
      port = `:${process.env.REACT_APP_AJAX_SERVER_PORT}`;
    } else if (MyStringUtil.isNotBlank(port)) {
      port = `:${port}`;
    }
    if (MyStringUtil.isNotBlank(process.env.REACT_APP_AJAX_SERVER_HOST)) {
      hostname = process.env.REACT_APP_AJAX_SERVER_HOST!;
    }
    let path = `${hostname}${port}`;
    if (!path.startsWith("http://") && !path.startsWith("https://")) {
      path = `${protocol}//${hostname}${port}`;
    }
    if (MyStringUtil.isNotBlank(relativePath)) {
      return path + relativePath;
    }
    return path;
  }
}

const Http = new HttpClass();

export default Http;
