import { MyContent } from "../antd/my-layout";
import React, { FC } from "react";
import BreadcrumbComponent from "../breadcrumb";

export const DeskPageContent: FC<{ children?: React.ReactNode }> = (props) => {
  const { children } = props;
  return (
    <MyContent className={"page-content"}>
      <BreadcrumbComponent />
      <div className="site-layout-content">{children}</div>
    </MyContent>
  );
};
