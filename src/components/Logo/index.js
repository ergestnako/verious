import React from "react";
import Flex from "@verious/vs-flex";

export default props => (
  <Flex justifyContent="center" alignItems="center">
    <div style={{ position: "relative" }}>
      <svg
        width={`${props.size}rem`}
        height={`${props.size}rem`}
        viewBox="0 0 1024 1024"
        version="1.1">
        <g>
          <polygon
            style={{ fill: props.overlayColor }}
            points="0 512 512 0 1024 512 512 1024"
          />
        </g>
      </svg>
      <svg
        width={`${props.size}rem`}
        height={`${props.size}rem`}
        viewBox="0 0 1024 1024"
        version="1.1"
        style={{ position: "absolute", top: 0, left: 0 }}>
        <g>
          <polygon
            style={{ fill: props.circleColor }}
            points="256 256 512 0 768 256 512 512"
          />
        </g>
      </svg>
    </div>
  </Flex>
);
