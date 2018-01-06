import React from 'react';

export default props => (
  <div style={{ position: 'relative' }}>
    <svg
      width={`${props.size}rem`}
      height={`${props.size}rem`}
      viewBox="0 0 1024 1024"
      version="1.1"
    >
      <g>
        <circle
          style={{ fill: props.circleColor }}
          cx="512.5"
          cy="512.5"
          r="369.5"
        />
      </g>
    </svg>
    <svg
      width={`${props.size}rem`}
      height={`${props.size}rem`}
      viewBox="0 0 1024 1024"
      version="1.1"
      style={{ position: 'absolute', top: 0, left: 0 }}
    >
      <g>
        <polygon
          style={{ fill: props.overlayColor }}
          points="0 296.44719 1024 653.033354 1024 -1.53969612 0 -1.53969612"
        />
      </g>
    </svg>
  </div>
);
