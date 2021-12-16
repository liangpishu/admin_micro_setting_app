import { MyStorage } from "../../storage";

class AccountService {
  static getAuthKey() {
    return MyStorage.Account.get("authKey");
  }
}

export { AccountService }
