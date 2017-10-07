'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* global document, getComputedStyle */

var React = require('react');
var utilities = require('../../utilities');

function getSpacingUnit() {
  if (typeof getComputedStyle === 'undefined') {
    return 0;
  }

  return parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function generatePoints(_ref) {
  var width = _ref.width,
      height = _ref.height,
      leftPosition = _ref.leftPosition,
      rightPosition = _ref.rightPosition;

  var spacingUnit = getSpacingUnit();

  // Top left point.
  var points = [0, spacingUnit * leftPosition];

  // Top right point.
  points = [].concat(_toConsumableArray(points), [spacingUnit * width, spacingUnit * rightPosition]);

  // Bottom right point.
  points = [].concat(_toConsumableArray(points), [spacingUnit * width, spacingUnit * height]);

  // Bottom left point.
  points = [].concat(_toConsumableArray(points), [0, spacingUnit * height]);

  return points.join(' ');
}

function getViewbox(_ref2) {
  var width = _ref2.width,
      height = _ref2.height;

  var spacingUnit = getSpacingUnit();
  return '0 0 ' + width * spacingUnit + ' ' + height * spacingUnit;
}

function getWidth(_ref3) {
  var width = _ref3.width;

  return getSpacingUnit() * width;
}

function getHeight(_ref4) {
  var height = _ref4.height;

  return getSpacingUnit() * height;
}

function getBackgroundClassName(_ref5) {
  var backgroundColor = _ref5.backgroundColor;

  var classes = [];

  if (backgroundColor) {
    if (utilities.isInternalColor(backgroundColor)) {
      classes = [].concat(_toConsumableArray(classes), ['vs-background-color--' + backgroundColor.slice(3)]);
    }
  }

  return classes.join(' ');
}

function getBackgroundStyle(_ref6) {
  var style = _ref6.style,
      backgroundColor = _ref6.backgroundColor,
      width = _ref6.width,
      height = _ref6.height;

  var spacingUnit = getSpacingUnit();
  var styles = {
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

function getAngleClassName(_ref7) {
  var angleColor = _ref7.angleColor;

  var classes = [];

  if (angleColor) {
    if (utilities.isInternalColor(angleColor)) {
      classes = [].concat(_toConsumableArray(classes), ['vs-fill-color--' + angleColor.slice(3)]);
    }
  }

  return classes.join(' ');
}

function getAngleStyle(_ref8) {
  var style = _ref8.style,
      angleColor = _ref8.angleColor;

  var styles = {};

  if (angleColor) {
    if (!utilities.isInternalColor(angleColor)) {
      styles.fill = angleColor;
    }
  }

  return Object.assign({}, style, styles);
}

module.exports = function (_ref9) {
  var backgroundColor = _ref9.backgroundColor,
      angleColor = _ref9.angleColor,
      width = _ref9.width,
      height = _ref9.height,
      leftPosition = _ref9.leftPosition,
      rightPosition = _ref9.rightPosition;
  return React.createElement(
    'div',
    {
      className: getBackgroundClassName({ backgroundColor: backgroundColor }),
      style: getBackgroundStyle({ backgroundColor: backgroundColor, width: width, height: height })
    },
    React.createElement(
      'svg',
      {
        width: getWidth({ width: width }),
        height: getHeight({ height: height }),
        viewBox: getViewbox({ width: width, height: height }),
        version: '1.1'
      },
      React.createElement(
        'g',
        {
          className: getAngleClassName({ angleColor: angleColor }),
          style: getAngleStyle({ angleColor: angleColor })
        },
        React.createElement('polygon', {
          points: generatePoints({
            width: width,
            height: height,
            leftPosition: leftPosition,
            rightPosition: rightPosition
          })
        })
      )
    )
  );
};