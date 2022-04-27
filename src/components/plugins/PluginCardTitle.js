import React from "react";
import PropTypes from "prop-types";
function PluginCardTitle({ title, isDisabled }) {
  return (
    <div className={`card-title ${isDisabled ? "card-title-disabled " : " "}`}>
      {title}
    </div>
  );
}
PluginCardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

export default PluginCardTitle;
