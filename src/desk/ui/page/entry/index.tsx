import React, { lazy } from "react";
import styled from "styled-components";
import { DeskPageFooter } from "../../component/desk-page/desk-page-footer";
import { DeskPageHeader } from "../../component/desk-page/desk-page-header";
import { DeskPageContent } from "../../component/desk-page/desk-page-content";
import { Redirect, Route, Switch } from "react-router-dom";
import { DashboardPath } from "desk/consts/path/dashboard";
import MyLangUtil from "../../../utils/my-lang-util";
import { AdminPath } from "desk/consts/path/admin";

const Dashboard = lazy(() => import("../dashboard"));
const AdminIndex = lazy(() => import("../admin"));

const Entry = () => {
  return (
    <EntryStyle>
      <DeskPageHeader/>
      <DeskPageContent>
        <React.Suspense fallback={<div>{MyLangUtil.get("Loading...")}</div>}>
          <Switch>
            <Route path={DashboardPath.INDEX} render={() => <Dashboard/>}/>
            <Route path={AdminPath.INDEX} render={() => <AdminIndex/>}/>
            <Redirect to={DashboardPath.INDEX}/>
          </Switch>
        </React.Suspense>
      </DeskPageContent>
      <DeskPageFooter/>
    </EntryStyle>
  );
};

export default Entry;

const EntryStyle = styled.div`  //撑满
  overflow: auto;
  height: 100%;
  background: #f0f2f5;

  .page-content { // 外层盒子
    padding: 0 50px;
    min-height: calc(100% - 70px - 64px);
    display: flex;
    flex-direction: column;

    .site-layout-content { // 内容区域
      flex: 1;
      min-height: 500px;
      padding: 24px;
      background: #fff;
    }
  }
  >.page-header {
    display: flex;
    .logo {
      width: 120px;
      height: 31px;
      margin: 16px 24px 16px 0;
      background: rgba(255, 255, 255, 0.3);
    }
    .page-header-menu {
      flex: 1;
    }
  }
`;
