import { Form } from "antd";
import { FormItemProps } from "antd/lib/form/FormItem";
import { PrefixPath, PropPath } from "../../../type";
import { FC } from "react";
import MyPathUtil from "../../../utils/my-path-util";

type TFItem = {} & FormItemProps & PrefixPath & PropPath
export const FItem: FC<TFItem> = (props) => {
  const { propName, prefix, name, required, rules, ...reset } = props;
  const nameReal = MyPathUtil.merge(prefix, propName);
  const rulesReal = (rules || []).concat({
    required,
    message: "Please complete this field",
  });
  return <Form.Item
    name={nameReal}
    {...reset}
    rules={rulesReal}
  />;
};