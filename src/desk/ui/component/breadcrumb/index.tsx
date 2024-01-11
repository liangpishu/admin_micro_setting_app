import { Breadcrumb } from "antd";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuUtils, MyLangUtil } from "@utils";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

const BreadcrumbComponent: FC = (props) => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const breadcrumbNameMap = MenuUtils.getBreadcrumbNameMap();

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url: string = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    const title = breadcrumbNameMap[url];
    return { title, path: url };
  });
  const breadcrumbItems = [{ title: MyLangUtil.get("Home"), path: "/" }].concat(extraBreadcrumbItems);

  return <Breadcrumb style={{ margin: "16px 0" }} items={breadcrumbItems} itemRender={itemRender} />;
};

export default BreadcrumbComponent;

function itemRender(item: ItemType) {
  return <Link to={item.path!}>{item.title}</Link>;
}
