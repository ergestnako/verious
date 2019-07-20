import React from "react";

function getClassName({ depth }) {
  return `vs-shadow--${depth}`;
}

export default ({ depth, children }) => (
  <div className={getClassName({ depth })}>{children}</div>
);
