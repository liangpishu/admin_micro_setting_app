import { NamePath } from "antd/lib/form/interface";

interface PropPath {
  propName?: NamePath
}

interface IOptionItem {
  id: string | number;
  text: string;
  [propName: string]: any
}

interface PrefixPath {
  prefix?: NamePath;
}

export type {
  PrefixPath,
  PropPath,
  IOptionItem
}
