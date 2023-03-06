import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { FormRenderPath } from "@/desk/consts/path";

const Edit = lazy(() => import("./edit"));
const Admin = () => {
  return (
    <Switch>
      <Route
        path={FormRenderPath.FORM_EDIT}
        key={FormRenderPath.FORM_EDIT}
        render={() => <Edit />}
      />
      <Redirect to={FormRenderPath.FORM_EDIT} />
    </Switch>
  );
};

export default Admin;
