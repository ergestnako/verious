/* global document, getComputedStyle */

const React = require('react');
const utilities = require('../../utilities');

function getSpacingUnit() {
  if (typeof getComputedStyle === 'undefined') {
    return 0;
  }

  return parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function generatePoints({ width, height, leftPosition, rightPosition }) {
  const spacingUnit = getSpacingUnit();

  // Top left point.
  let points = [0, spacingUnit * leftPosition];

  // Top right point.
  points = [...points, spacingUnit * width, spacingUnit * rightPosition];

  // Bottom right point.
  points = [...points, spacingUnit * width, spacingUnit * height];

  // Bottom left point.
  points = [...points, 0, spacingUnit * height];

  return points.join(' ');
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

function getBackgroundClassName({ backgroundColor }) {
  let classes = [];

  if (backgroundColor) {
    if (utilities.isInternalColor(backgroundColor)) {
      classes = [
        ...classes,
        `vs-background-color--${backgroundColor.slice(3)}`
      ];
    }
  }

  return classes.join(' ');
}

function getBackgroundStyle({ style, backgroundColor, width, height }) {
  const spacingUnit = getSpacingUnit();
  const styles = {
    width: width * spacingUnit,
    height: height * spacingUnit
  };

  if (backgroundColor) {
    if (!utilities.isInternalColor(backgroundColor)) {
      styles.backgroundColor = backgroundColor;
    }
  }

  return Object.assign({}, style, styles);
}

function getAngleClassName({ angleColor }) {
  let classes = [];

  if (angleColor) {
    if (utilities.isInternalColor(angleColor)) {
      classes = [...classes, `vs-fill-color--${angleColor.slice(3)}`];
    }
  }

  return classes.join(' ');
}

function getAngleStyle({ style, angleColor }) {
  const styles = {};

  if (angleColor) {
    if (!utilities.isInternalColor(angleColor)) {
      styles.fill = angleColor;
    }
  }

  return Object.assign({}, style, styles);
}

module.exports = ({
  backgroundColor,
  angleColor,
  width,
  height,
  leftPosition,
  rightPosition
}) => (
  <div
    className={getBackgroundClassName({ backgroundColor })}
    style={getBackgroundStyle({ backgroundColor, width, height })}
  >
    <svg
      width={getWidth({ width })}
      height={getHeight({ height })}
      viewBox={getViewbox({ width, height })}
      version="1.1"
    >
      <g
        className={getAngleClassName({ angleColor })}
        style={getAngleStyle({ angleColor })}
      >
        <polygon
          points={generatePoints({
            width,
            height,
            leftPosition,
            rightPosition
          })}
        />
      </g>
    </svg>
  </div>
);
