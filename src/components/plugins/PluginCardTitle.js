import React from "react";

export default function PluginCardTitle({ title, isDisabled }) {
  return (
    <div className={`card-title ${isDisabled ? "card-title-disabled " : " "}`}>
      {title}
    </div>
  );
}
