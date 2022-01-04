import React, { FC } from "react";
import { Layout } from "antd";
import { LayoutProps } from "antd/lib/layout";
import { BasicProps, Content, Footer, Header } from "antd/lib/layout/layout";

interface IProps extends LayoutProps {

}
const MyLayout:FC<IProps> = (props) => {
  return (
    <Layout {...props} />
  );
};

const MyHeader:FC<BasicProps> = (props) => {
  return (
    <Header {...props} />
  );
};

const MyContent:FC<BasicProps> = (props) => {
  return (
    <Content {...props} />
  );
};

const MyFooter:FC<BasicProps> = (props) => {
  return (
    <Footer {...props} />
  );
};

export {
  MyLayout,
  MyContent,
  MyFooter,
  MyHeader
};
