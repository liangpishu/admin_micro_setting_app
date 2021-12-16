import StorageProxy from "./storage-proxy";
import { ConstStorage } from "../consts/params/const-storage";

const Account = new StorageProxy(ConstStorage.ACCOUNT);

export const MyStorage = {
  Account
}
