import React from "react";
import Plugins from "../pages/Plugins";
import { Switch, Route, Redirect } from "react-router-dom";
import { routesState } from "../reducers/routesSlice";

import { onFetchTabData, onFetchTabs } from "../actions/RoutesAction";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "../pages/404";

export default function Routes() {
  const dispatch = useDispatch();
  const { tabs } = useSelector(routesState);

  React.useEffect(() => {
    dispatch(onFetchTabs());
    dispatch(onFetchTabData());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/">
        {tabs[0] ? <Redirect to={`/${tabs[0]}`} /> : null}
      </Route>
      {tabs?.map((item) => {
        return (
          <Route key={item} path={`/${item}`}>
            <Plugins />
          </Route>
        );
      })}
      {tabs.length ? (
        <Route path="*">
          <NotFound />
        </Route>
      ) : null}
    </Switch>
  );
}
