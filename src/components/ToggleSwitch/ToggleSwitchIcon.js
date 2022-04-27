import React, { useState } from "react";
import "./main.css";
import Switch from "react-switch";
import { useDispatch, useSelector } from "react-redux";
import { routesState } from "../../reducers/routesSlice";
import {
  onDisableAllPlugins,
  onEnablellPlugins,
} from "../../actions/statusAction";
import {
  onDisabled,
  onEnabled,
  pluginsState,
} from "../../reducers/pluginsSlice";

function ToggleSwitchIcon() {
  const [checked, setChecked] = useState(true);
  const { tabdata, countDisbaled } = useSelector(routesState);
  const { count, loading } = useSelector(pluginsState);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (countDisbaled && count) {
      if (countDisbaled === 0) {
        setChecked(true);
        dispatch(onEnabled());
      } else if (count === countDisbaled) {
        setChecked(false);
        dispatch(onDisabled());
      } else {
        setChecked(true);
        dispatch(onDisabled());
      }
    }
  }, [countDisbaled, count, dispatch]);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    if (nextChecked) {
      dispatch(onEnabled());
      dispatch(onEnablellPlugins({ tabdata }));
    } else {
      dispatch(onDisabled());
      dispatch(onDisableAllPlugins({ tabdata }));
    }
  };
  if (loading && countDisbaled && count) return <span></span>;
  return (
    <div
      style={{
        position: "absolute",
        fontSize: "16px",
        padding: "30px 20px",
        bottom: 0,
        left: 0,
        right: 0,
        display: "grid",
        gridTemplateColumns: "auto 80px",
        transition: " 3s",
        backgroundImage: `linear-gradient(transparent,transparent,  ${
          checked ? "#a0dabd" : "#d8838a"
        })`,
      }}
    >
      <span style={{ textAlign: "center" }}>All Plugins enabled</span>
      <label>
        <Switch
          onChange={handleChange}
          checked={checked}
          uncheckedIcon={false}
          checkedIcon={false}
          className="react-switch"
          offColor="#d45464"
          onColor="#60cc8c"
          uncheckedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "#d45464",
                fontSize: 18,
              }}
            >
              <i className="fa-solid fa-power-off"></i>
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "#60cc8c",
                fontSize: 18,
              }}
            >
              <i className="fa-solid fa-power-off"></i>
            </div>
          }
        />
      </label>
    </div>
  );
}

export default ToggleSwitchIcon;
