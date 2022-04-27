import React from "react";
import { useSelector } from "react-redux";
import useCurrentTab from "../../hooks/useCurrentTab";

import { routesState } from "../../reducers/routesSlice";

export default function PageTitle() {
  const { tabdata } = useSelector(routesState);
  const { currentTab } = useCurrentTab();

  return (
    <div className="page-title">
      {tabdata && currentTab ? (
        <span>{tabdata[currentTab]?.title} Plugins</span>
      ) : null}
    </div>
  );
}
