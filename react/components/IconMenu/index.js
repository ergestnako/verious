import React from "react";
import Icon from "@verious/vs-icon";

const when = bool => ({
  then: (a, b) => (bool ? a : b)
});

module.exports = ({ iconColor, mode }) =>
  when(mode === "cross").then(
    <Icon name="x" color={iconColor} />,
    <Icon name="menu" color={iconColor} />
  );
