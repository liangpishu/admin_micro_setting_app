import { Breadcrumb } from "antd";
import { FC } from "react";
import MyLangUtil from "../../../utils/my-lang-util";
import { Link, useLocation } from "react-router-dom";
import { MenuUtils } from "@/desk/utils/menu-utils";

const BreadcrumbComponent: FC = (props) => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const breadcrumbNameMap = MenuUtils.getBreadcrumbNameMap();
  console.log(breadcrumbNameMap, "breadcrumbNameMap");
  console.log(pathSnippets, "pathSnippets");

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url: string = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    console.log(url, "url");
    if (!breadcrumbNameMap[url]) return <></>;
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
  console.log(breadcrumbItems, "breadcrumbItems");
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>{breadcrumbItems}</Breadcrumb>
  );
};

export default BreadcrumbComponent;
