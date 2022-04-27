import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

export default function NotFound() {
  return (
    <Layout>
      {" "}
      <div className="page-title">
        <span>
          Data<strong>Guard</strong>
        </span>
      </div>
      <div style={{ textAlign: "center", marginTop: "30vh" }}>
        <span style={{ fontSize: "30px" }}>OUPS 404 PAGE NOT FOUND </span>
        <div>
          <Link to="/">GO BACK</Link>
        </div>
      </div>
    </Layout>
  );
}
