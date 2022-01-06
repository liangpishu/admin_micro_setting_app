import { Breadcrumb } from "antd";
import React, { FC } from "react";
import { DashboardPath } from "../../../consts/path/dashboard";
import { AdminPath } from "../../../consts/path/admin";
import MyLangUtil from "../../../utils/my-lang-util";
import { Link, useLocation } from "react-router-dom";

const BreadcrumbComponent: FC = (props) => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">{MyLangUtil.get("Home")}</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return <Breadcrumb style={{ margin: "16px 0" }}>{breadcrumbItems}</Breadcrumb>;
};

export default BreadcrumbComponent;

const breadcrumbNameMap = {
  [DashboardPath.INDEX]: MyLangUtil.get("Dashboard"),
  [AdminPath.INDEX]: MyLangUtil.get("Admin"),
  [AdminPath.USER_INFO]: MyLangUtil.get("User"),
};
