import { NamePath } from "antd/lib/form/interface";

interface PropPath {
  propName?: NamePath;
}

interface IOptionItem {
  id: string | number;
  text: string;
  ext: Record<string, unknown>;
}

interface PrefixPath {
  prefix?: NamePath;
}

export type { PrefixPath, PropPath, IOptionItem };
