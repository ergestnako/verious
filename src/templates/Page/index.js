import React from "react";
import "verious-styles/css/verious-styles.css";
import Head from "../../components/Head";

export default ({ children }) => (
  <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
    <Head title="Verious" />
    {children}
  </div>
);
