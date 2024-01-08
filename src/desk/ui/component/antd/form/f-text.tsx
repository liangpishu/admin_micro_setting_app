import { Input } from "antd";
import { FormItemProps } from "antd/lib/form/FormItem";
import { PrefixPath, PropPath } from "@types";
import { FC } from "react";
import { InputProps } from "antd/lib/input/Input";
import { FItem } from "@form-components";

type TFIText = {
  inputProps?: InputProps;
} & FormItemProps &
  PrefixPath &
  PropPath;
export const FText: FC<TFIText> = (props) => {
  const { inputProps, ...rest } = props;

  return (
    <FItem {...rest}>
      <Input autoComplete={"new-password"} {...inputProps} />
    </FItem>
  );
};
