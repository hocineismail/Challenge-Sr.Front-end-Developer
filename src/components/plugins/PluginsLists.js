import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { onFetchPlugins } from "../../actions/PluginsActions";
import useCurrentPlugins from "../../hooks/useCurrentPlugins";
import useCurrentTab from "../../hooks/useCurrentTab";
import { pluginsState } from "../../reducers/pluginsSlice";
import { isActived } from "../../utils/isActived";
import { isDisabled } from "../../utils/isDisabled";

import PluginCard from "./PluginCard";

function PluginsLists() {
  const { loading, plugins, disabledAll } = useSelector(pluginsState);
  const dispatch = useDispatch();
  const { currentTab } = useCurrentTab();
  React.useEffect(() => {
    dispatch(onFetchPlugins());
  }, [dispatch]);
  const { currentPlugins, currentDisabled, currentActive } =
    useCurrentPlugins();
  // console.log(currentPlugins);
  if (loading)
    return (
      <div>
        <div id="hexagon-spinner">
          <div className="hexagon-loader"></div>
        </div>
      </div>
    );
  return (
    <div className="wrapper" style={{ margin: "10px 20px 20px 20px" }}>
      {currentPlugins?.map((item, index) => {
        return (
          <PluginCard
            key={index}
            title={plugins[item].title}
            text={plugins[item].description}
            isEnabled={isActived({ plugin: item, plugins: currentActive })}
            isDisabled={
              isDisabled({
                plugin: item,
                plugins: currentDisabled,
              }) || disabledAll
            }
            tab={currentTab}
            currentPlugin={item}
          />
        );
      })}
    </div>
  );
}
export default PluginsLists;
