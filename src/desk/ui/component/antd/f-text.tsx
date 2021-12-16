import { Input } from "antd";
import { FormItemProps } from "antd/lib/form/FormItem";
import { PrefixPath, PropPath } from "../../../type";
import { FC } from "react";
import { InputProps } from "antd/lib/input/Input";
import { FItem } from "./f-item";

type TFIText = {
  inputProps?: InputProps
} & FormItemProps & PrefixPath & PropPath;
export const FText: FC<TFIText> = (props) => {
  const { inputProps, ...reset } = props;

  return <FItem {...reset}>
    <Input {...inputProps}/>
  </FItem>;
};
