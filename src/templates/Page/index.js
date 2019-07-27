import React from "react";
import "verious-styles/css/verious-styles.css";
import "../../../scss/styles.scss";
import Footer from "../../components/Footer";
import Head from "../../components/Head";

export default ({ children }) => (
  <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
    <Head title="Verious" />
    {children}
    <Footer />
  </div>
);
