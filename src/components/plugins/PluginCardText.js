import React from "react";
import PropTypes from "prop-types";
function PluginCardText({ text, isDisabled }) {
  return (
    <p className={`card-text ${isDisabled ? "card-text-disabled " : " "}`}>
      {text}
    </p>
  );
}
PluginCardText.propTypes = {
  text: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

export default PluginCardText;
