import React, { lazy, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AccountService } from "../service/user";
import { LoginPath } from "../consts/path/login";
import MyLangUtil from "../utils/my-lang-util";

const Entry = lazy(() => import("../ui/page/entry"));
const Login = lazy(() => import("../ui/page/login"));


const RouterEntry = () => {
  return (
    <React.Suspense fallback={<div>{MyLangUtil.get("Loading...")}</div>}>
      <BrowserRouter>
        <Route>
          <Switch>
            <Route path={LoginPath.LOGIN} render={() => {
              return <Login />;
            }} />
            <Route path={"/*"} render={() => {
              if (AccountService.getAuthKey()) {
                return <>
                  <ScrollToTop />
                  <Entry />
                </>;
              }
              return <Redirect to={LoginPath.LOGIN} />;
            }}>
            </Route>
          </Switch>
        </Route>
      </BrowserRouter>
    </React.Suspense>
  );
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default RouterEntry;
