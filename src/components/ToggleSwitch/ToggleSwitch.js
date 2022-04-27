import React, { useState } from "react";
import "./main.css";
import Switch from "react-switch";
import { useDispatch, useSelector } from "react-redux";
import { onActivePlugin, onInactivePlugin } from "../../actions/statusAction";
import useCurrentTab from "../../hooks/useCurrentTab";
import { routesState } from "../../reducers/routesSlice";

export default function ToggleSwitch({ checked, disabled, currentPlugin }) {
  const dispatch = useDispatch();
  const { tabdata } = useSelector(routesState);
  const [ischecked, setisChecked] = useState(checked);
  const { currentTab } = useCurrentTab();
  const handleChange = (nextChecked) => {
    if (nextChecked) {
      setisChecked(false);
      dispatch(
        onActivePlugin({
          currentTab: currentTab,
          currentPlugin: currentPlugin,
          tabdata,
        })
      );
    } else {
      setisChecked(false);
      dispatch(
        onInactivePlugin({
          currentTab: currentTab,
          currentPlugin: currentPlugin,
          tabdata,
        })
      );
    }
  };
  React.useEffect(() => {
    setisChecked(checked);
  }, [checked]);
  return (
    <>
      <label>
        <Switch
          onChange={handleChange}
          checked={ischecked}
          disabled={disabled}
          uncheckedIcon={false}
          checkedIcon={false}
          className="react-switch"
          offColor="#d45464"
          onColor="#60cc8c"
          id="material-switch"
        />
      </label>
      <div style={{ textAlign: "center" }}>
        <div
          className={
            checked
              ? `status-toggle-active ${
                  disabled ? "status-toggle-active-disabled" : ""
                }`
              : `status-toggle-inactive ${
                  disabled ? "status-toggle-inactive-disabled" : ""
                }`
          }
        >
          {checked ? "Allowed" : "Blocked"}
        </div>
      </div>
    </>
  );
}
