import { useState, useEffect } from "react";

export default function useCurrentTab() {
  const [currentTab, setcurrentTab] = useState(null);
  useEffect(() => {
    let tab = window.location.pathname.split("/");
    setcurrentTab(tab[1]);
  }, [setcurrentTab]);
  return { currentTab };
}
