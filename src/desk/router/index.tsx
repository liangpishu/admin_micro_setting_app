import React, { useEffect } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { AccountService } from "../service/user";
import { LoginPath } from "../consts/path/login";
import Login from "../ui/page/login";
import Entry from "../ui/page/entry";

const RouterEntry = () => {
  return (
    <BrowserRouter>
      <Route>
        <Switch>
          <Route
            path={LoginPath.LOGIN}
            render={() => {
              return <Login />;
            }}
          />
          <Route
            path={"/*"}
            render={() => {
              if (AccountService.getAuthKey()) {
                return (
                  <>
                    <ScrollToTop />
                    <Entry />
                  </>
                );
              }
              return <Redirect to={LoginPath.LOGIN} />;
            }}
          ></Route>
        </Switch>
      </Route>
    </BrowserRouter>
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
