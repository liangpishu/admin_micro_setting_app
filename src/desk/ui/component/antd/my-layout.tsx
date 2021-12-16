import React, { FC } from "react";
import { Layout } from "antd";
import { LayoutProps } from "antd/lib/layout";

interface IProps extends LayoutProps {

}
const MyLayout:FC<IProps> = (props) => {
  return (
    <Layout {...props} />
  );
};

export default MyLayout;
