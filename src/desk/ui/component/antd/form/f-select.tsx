import { Select } from "antd";
import { FormItemProps } from "antd/lib/form/FormItem";
import { IOptionItem, PrefixPath, PropPath } from "@types";
import { FC, useMemo } from "react";
import { FItem } from "@form-components";
import { SelectProps } from "antd/lib/select";
import { MyLodashUtil } from "@utils";
import { useMasterTable } from "@ui/hooks/use-master-table";

const { Option } = Select;

type TFISelect = {
  selectProps?: SelectProps<any>;
  options?: IOptionItem[];
  tableName?: string;
  filter?: (props: { options: IOptionItem[] }) => IOptionItem[];
} & FormItemProps &
  PrefixPath &
  PropPath;
export const FSelect: FC<TFISelect> = (props) => {
  const { selectProps, tableName, options, filter, ...rest } = props;
  const { data } = useMasterTable(tableName);

  const getOptions = useMemo(() => {
    let newOptions;
    if (MyLodashUtil.isEmpty(data)) {
      newOptions = options || [];
    } else {
      newOptions = data;
    }
    if (filter) {
      newOptions = filter({ options: newOptions });
    }
    return newOptions;
  }, [data, options, filter]);

  return <FSelectBase options={getOptions} {...rest} />;
};

type TFISelectBase = {
  selectProps?: SelectProps<any>;
  options?: IOptionItem[];
} & Omit<TFISelect, "tableName" | "filter">;

const FSelectBase: FC<TFISelectBase> = (props) => {
  const { selectProps, options = [], ...rest } = props;
  return (
    <FItem {...rest}>
      <Select style={{ width: "100%" }} {...selectProps}>
        {options.map((item) => {
          return (
            <Option value={item.id} title={item.text} data-origin={item}>
              {item.text}
            </Option>
          );
        })}
      </Select>
    </FItem>
  );
};
