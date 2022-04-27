import React from "react";
import Navigations from "../navigations/Navigations";

export default function Layout({ children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "300px auto" }}>
      <Navigations />
      <div>{children}</div>
    </div>
  );
}
