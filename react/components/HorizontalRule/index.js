import React from "react";
import Flex from "@verious/vs-flex";
import Spacer from "@verious/vs-spacer";
import BackgroundColor from "@verious/vs-background-color";
import utilities from "../../utilities";

function getClassName({ height }) {
  let classes = [];

  if (height) {
    classes = [...classes, `vs-height--${height}`];
  }

  return classes.join(" ");
}

function getLineClassName({ lineColor }) {
  let classes = ["vs-horizontal-rule"];

  if (lineColor) {
    if (utilities.isInternalColor(lineColor)) {
      classes = [...classes, `vs-background-color--${lineColor.slice(3)}`];
    }
  }

  return classes.join(" ");
}

export default ({ height, style, lineColor }) => (
  <div className={getClassName({ height })}>
    <Flex direction="column" style={{ height: "100%" }}>
      <Spacer />
      <BackgroundColor color={lineColor}>
        <div className={getLineClassName({ lineColor })} />
      </BackgroundColor>
      <Spacer />
    </Flex>
  </div>
);
