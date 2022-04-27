import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { routesState } from "../reducers/routesSlice";

import { getPluginsForTab } from "../utils/getPluginsForTab";
import useCurrentTab from "./useCurrentTab";

export default function useCurrentPlugins() {
  const { currentTab } = useCurrentTab();

  const [currentPlugins, setCurrentPlugins] = useState([]);
  const [currentActive, setCurrentActive] = useState([]);
  const [currentDisabled, setCurrentDisabled] = useState([]);
  const [currentInactive, setcurrentInactive] = useState([]);
  const { tabdata, tabs } = useSelector(routesState);
  //**
  // if the url change make sure to change losing state to true
  // */

  useEffect(() => {
    if (tabdata.length !== 0 && tabs.length !== 0 && currentTab) {
      let data = getPluginsForTab({
        active: tabdata[currentTab].active,
        disabled: tabdata[currentTab].disabled,
        inactive: tabdata[currentTab].inactive,
      });

      setCurrentDisabled(tabdata[currentTab].disabled);
      setCurrentActive(tabdata[currentTab].active);
      setcurrentInactive(tabdata[currentTab].inactive);
      setCurrentPlugins(data);
    }
  }, [tabdata, tabs, currentTab]);
  return {
    currentActive,
    currentDisabled,
    currentPlugins,
    currentInactive,
  };
}
