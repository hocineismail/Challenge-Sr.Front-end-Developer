import React from "react";
import Layout from "../components/layout/Layout";
import PluginsLists from "../components/plugins/PluginsLists";
import PageTitle from "../components/title/PageTitle";

export default function Plugins() {
  return (
    <Layout>
      <PageTitle />
      <PluginsLists />
    </Layout>
  );
}
