import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AdminPath } from "@/desk/consts/path/admin";

const UserInfo = lazy(() => import("./user"));
const Setting = lazy(() => import("./setting"));
const Admin = () => {
  return (
    <Switch>
      <Route path={AdminPath.USER_INFO} key={AdminPath.USER_INFO} render={() => <UserInfo />} />
      <Route path={AdminPath.USER_SETTING} key={AdminPath.USER_SETTING} render={() => <Setting />} />

      <Redirect to={AdminPath.USER_INFO} />
    </Switch>
  );
};

export default Admin;
