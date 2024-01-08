import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AdminPath } from "@/desk/consts/path/admin";

const UserInfo = lazy(() => import("./user"));
const Admin = () => {
  return (
    <Switch>
      <Route path={AdminPath.USER_INFO} key={AdminPath.USER_INFO} render={() => <UserInfo />} />

      <Redirect to={AdminPath.USER_INFO} />
    </Switch>
  );
};

export default Admin;
