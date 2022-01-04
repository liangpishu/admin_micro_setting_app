import { Radio } from "antd";
import { FormItemProps } from "antd/lib/form/FormItem";
import { IOptionItem, PrefixPath, PropPath } from "../../../type";
import { FC, useMemo } from "react";
import { FItem } from "./f-item";
import MyLodashUtil from "../../../utils/my-lodash-util";
import { RadioProps } from "antd/lib/radio/interface";
import { useMasterTable } from "../../hooks/use-master-table";


type TFIRadio = {
  radioProps?: RadioProps;
  options?: IOptionItem[],
  tableName?: string;
  type?: "button"
  filter?: (props: { options: IOptionItem[] }) => IOptionItem[]
} & FormItemProps & PrefixPath & PropPath;

export const FRadio: FC<TFIRadio> = (props) => {
  const { radioProps, tableName, options, filter, ...rest } = props;
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

  return <FRadioBase options={getOptions} {...rest} />;
};

type TFIRadioBase = {} & Omit<TFIRadio, "tableName" | "filter">;

const FRadioBase: FC<TFIRadioBase> = (props) => {
  const { radioProps, options = [], type, ...rest } = props;
  const isButton = useMemo(() => {
    return type == "button";
  }, [type]);
  return <FItem {...rest}>
    <Radio.Group
      {...radioProps}
    >
      {
        options.map((item) => {
          return isButton ?
            <Radio.Button value={item.id} key={item.id} data-origin={item}>
              {item.text}
            </Radio.Button>
            :
            <Radio value={item.id} key={item.id} data-origin={item}>
              {item.text}
            </Radio>;
        })
      }
    </Radio.Group>
  </FItem>;
};
