import React from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import PluginCardText from "./PluginCardText";
import PluginCardTitle from "./PluginCardTitle";
import PropTypes from "prop-types";
function PluginCard({ title, text, isEnabled, isDisabled, currentPlugin }) {
  return (
    <div className={`card ${isDisabled ? "card-disabled" : ""}`}>
      <div>
        <PluginCardTitle title={title} isDisabled={isDisabled} />
        <PluginCardText text={text} isDisabled={isDisabled} />
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
PluginCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  isEnabled: PropTypes.bool,
  isDisabled: PropTypes.bool,
  currentPlugin: PropTypes.string,
};

export default PluginCard;
