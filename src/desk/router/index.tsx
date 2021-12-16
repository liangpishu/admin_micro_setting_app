import React, { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AccountService } from "../service/user";
import { LoginPath } from "../consts/path/login";
import { Login } from "../ui/page/login";

const RouterEntry = () => {
  return (
    <React.Suspense fallback={<div/>}>
      <BrowserRouter>
        <Route>
          <Switch>
            <Route path={LoginPath.LOGIN} render={() => {
              return <Login/>;
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
