import React from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import PluginCardText from "./PluginCardText";
import PluginCardTitle from "./PluginCardTitle";

export default function PluginCard({
  title,
  text,
  isEnabled,
  isDisabled,
  currentPlugin,
}) {
  return (
    <div className={`card ${isDisabled ? "card-disabled" : ""}`}>
      <div>
        <PluginCardTitle title={title} isDisabled={isDisabled} />
        <PluginCardText title={text} isDisabled={isDisabled} />
      </div>
      <div>
        <ToggleSwitch
          disabled={isDisabled}
          checked={isEnabled}
          currentPlugin={currentPlugin}
        />
      </div>
    </div>
  );
}
