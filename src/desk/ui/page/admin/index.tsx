import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AdminPath } from "@/desk/consts/path/admin";

const UserInfo = lazy(() => import("./user"));
const FRender = lazy(() => import("./f-render"));
const Admin = () => {
  return (
    <Switch>
      <Route
        path={AdminPath.USER_INFO}
        key={AdminPath.USER_INFO}
        render={() => <UserInfo />}
      />
      <Route
        path={AdminPath.F_RENDER}
        key={AdminPath.F_RENDER}
        render={() => <FRender />}
      />
      <Redirect to={AdminPath.USER_INFO} />
    </Switch>
  );
};

export default Admin;
