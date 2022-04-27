import React from "react";

export default function PluginCardText({ text, isDisabled }) {
  return (
    <p className={`card-text ${isDisabled ? "card-text-disabled " : " "}`}>
      {text}
    </p>
  );
}
