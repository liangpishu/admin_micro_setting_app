import React, { FC } from "react";
import { Layout } from "antd";
import { LayoutProps, SiderProps } from "antd/lib/layout";
import { BasicProps } from "antd/lib/layout/layout";
const { Header, Content, Footer, Sider } = Layout;
interface IProps extends LayoutProps {}
const MyLayout: FC<IProps> = (props) => {
  return <Layout {...props} />;
};

const MyHeader: FC<BasicProps> = (props) => {
  return <Header {...props} />;
};

const MySider: FC<SiderProps> = (props) => {
  return <Sider {...props} />;
};

const MyContent: FC<BasicProps> = (props) => {
  return <Content {...props} />;
};

const MyFooter: FC<BasicProps> = (props) => {
  return <Footer {...props} />;
};

export { MyLayout, MyContent, MyFooter, MyHeader, MySider };
