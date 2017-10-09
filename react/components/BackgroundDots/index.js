/* global document, getComputedStyle */

const React = require('react');
const utilities = require('../../utilities');

function getSpacingUnit() {
  if (typeof getComputedStyle === 'undefined') {
    return 0;
  }

  return parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function getViewbox({ width, height }) {
  const spacingUnit = getSpacingUnit();
  return `0 0 ${width * spacingUnit} ${height * spacingUnit}`;
}

function getWidth({ width }) {
  return getSpacingUnit() * width;
}

function getHeight({ height }) {
  return getSpacingUnit() * height;
}

function getStyles({ backgroundColor }) {
  const styles = {
    position: 'relative',
    overflow: 'hidden'
  };

  if (backgroundColor) {
    if (!utilities.isInternalColor(backgroundColor)) {
      styles.backgroundColor = backgroundColor;
    } else {
      styles.backgroundColor = utilities.getInternalColor(backgroundColor);
    }
  }

  return Object.assign({}, styles);
}

function getDotColor({ dotColor }) {
  let dc = dotColor;

  if (utilities.isInternalColor(dotColor)) {
    dc = utilities.getInternalColor(dotColor);
  }

  return dc;
}

function renderCircles({ width, height, density, maxRadius }) {
  const w = getWidth({ width });
  const h = getHeight({ height });
  const dotCount = Math.floor(width * height * density);

  const circles = Array(...Array(dotCount)).map((val, index) => {
    const cx = Math.floor(Math.random() * w);
    const cy = Math.floor(Math.random() * h);
    const r = Math.floor(Math.random() * maxRadius);
    return <circle key={index} cx={cx} cy={cy} r={r} />;
  });

  return circles;
}

module.exports = ({ children, backgroundColor, dotColor, width, height, density, maxRadius }) => (
  <div style={getStyles({ backgroundColor })}>
    <svg
      style={{ position: 'absolute', top: 0, left: 0 }}
      width={getWidth({ width })}
      height={getHeight({ height })}
      viewBox={getViewbox({ width, height })}
      version="1.1"
    >
      <g fill={getDotColor({ dotColor })}>{renderCircles({ width, height, density, maxRadius })}</g>
    </svg>
    {children}
  </div>
);
