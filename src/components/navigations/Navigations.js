import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { routesState } from "../../reducers/routesSlice";
import GetRouteIcon from "../../utils/GetRouteIcon";
import ToggleSwitchIcon from "../ToggleSwitch/ToggleSwitchIcon";
import NavigationsTitle from "./NavigationsTitle";

export default function Navigations() {
  const history = useHistory();
  const location = useLocation();
  const { tabs, tabdata } = useSelector(routesState);
  const handleNavigate = (path) => {
    history.push(`/${path}`);
  };

  if (tabs.length === 0 || tabdata.length === 0) return <div>Fetching</div>;
  return (
    <div>
      <div className="side-bar">
        <NavigationsTitle />
        <ul className="navigation">
          {tabs?.map((item) => {
            return (
              <li
                key={item}
                className={
                  location.pathname === `/${item}`
                    ? "navigation-item-avtive"
                    : "navigation-item"
                }
                onClick={() => handleNavigate(item)}
              >
                <div
                  style={{
                    margin: "10px  3px ",
                    display: "inline-block",
                  }}
                >
                  <GetRouteIcon iconKey={tabdata[item]?.icon} />
                </div>
                <span
                  style={{
                    display: "inline-block",
                    paddingLeft: "12px ",
                  }}
                >
                  {tabdata[item]?.title}
                </span>{" "}
              </li>
            );
          })}
        </ul>
        <ToggleSwitchIcon />
      </div>
    </div>
  );
}
