import StorageProxy from "./storage-proxy";
import { ConstStorage } from "@consts/params/const-storage";

const Account = new StorageProxy(ConstStorage.ACCOUNT);
const FRenderData = new StorageProxy(ConstStorage.F_RENDER_DATA);

export const MyStorage = {
  Account,
  FRenderData,
};
