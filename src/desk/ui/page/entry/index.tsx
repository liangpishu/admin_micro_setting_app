import React, { FC, lazy, useState } from "react";
import styled from "styled-components";
import { Redirect, Route, Switch } from "react-router-dom";
import { DashboardPath } from "@consts/path/dashboard";
import MyLangUtil from "../../../utils/my-lang-util";
import { AdminPath } from "@consts/path/admin";
import { MyLayout } from "@ui/component/antd/my-layout";
import { DeskPageSider } from "@ui/component/desk-page/desk-page-sider";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { DeskPageHeader } from "@ui/component/desk-page/desk-page-header";
import { DeskPageContent } from "@ui/component/desk-page/desk-page-content";
import { DeskPageFooter } from "@ui/component/desk-page/desk-page-footer";
import { SettingPath } from "@/desk/consts/path/setting";
const Dashboard = lazy(() => import("../dashboard"));
const AdminIndex = lazy(() => import("../admin"));
const UserSetting = lazy(() => import("../setting/index"));

const Entry = () => {
  return (
    <EntryLayout>
      <React.Suspense fallback={<div>{MyLangUtil.get("Loading...")}</div>}>
        <Switch>
          <Route path={DashboardPath.INDEX} render={() => <Dashboard />} />
          <Route path={AdminPath.INDEX} render={() => <AdminIndex />} />
          <Route path={SettingPath.INDEX} render={() => <UserSetting />} />
          <Redirect to={DashboardPath.INDEX} />
        </Switch>
      </React.Suspense>
    </EntryLayout>
  );
};

const EntryLayout: FC = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <EntryStyle style={{ minHeight: "100vh" }}>
      <DeskPageSider trigger={null} collapsible collapsed={collapsed} />
      <MyLayout className="site-layout">
        <DeskPageHeader>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </DeskPageHeader>
        <DeskPageContent>{props.children}</DeskPageContent>
        <DeskPageFooter />
      </MyLayout>
    </EntryStyle>
  );
};
export default Entry;

const EntryStyle = styled(MyLayout)`
  .page-sider {
    .logo {
      height: 32px;
      margin: 16px;
      background: rgba(255, 255, 255, 0.3);
    }
  }
  .site-layout {
    > .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
    }
    .page-content {
      // 外层盒子
      padding: 0 24px;
      min-height: calc(100% - 70px - 64px);
      .site-layout-content {
        // 内容区域
        flex: 1;
        height: 100%;
        min-height: 500px;
        padding: 24px;
        background: #fff;
      }
    }
  }
`;
