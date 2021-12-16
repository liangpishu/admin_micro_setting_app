import React, { useEffect } from "react";
import { HashRouter, Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AccountService } from "../service/user";
import { LoginPath } from "../consts/path/login";

const RouterEntry = () => {
  return (
    <React.Suspense fallback={<div/>}>
      <HashRouter>
        <Route>
          <Switch>
            <Route path={LoginPath.LOGIN} render={() => {
              return <>
                登录
              </>;
            }}/>
            <Route path={"/*"} render={() => {
              if (AccountService.getAuthKey()) {
                return <>
                  <ScrollToTop/>
                  已登录
                </>;
              }
              return <Redirect to={LoginPath.LOGIN}/>;
            }}>

            </Route>
          </Switch>
        </Route>
      </HashRouter>
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
