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

function getViewbox(_ref) {
  var width = _ref.width,
      height = _ref.height;

  var spacingUnit = getSpacingUnit();
  return '0 0 ' + width * spacingUnit + ' ' + height * spacingUnit;
}

function getWidth(_ref2) {
  var width = _ref2.width;

  return getSpacingUnit() * width;
}

function getHeight(_ref3) {
  var height = _ref3.height;

  return getSpacingUnit() * height;
}

function getStyles(_ref4) {
  var backgroundColor = _ref4.backgroundColor;

  var styles = {
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

function getDotColor(_ref5) {
  var dotColor = _ref5.dotColor;

  var dc = dotColor;

  if (utilities.isInternalColor(dotColor)) {
    dc = utilities.getInternalColor(dotColor);
  }

  return dc;
}

function renderCircles(_ref6) {
  var width = _ref6.width,
      height = _ref6.height,
      density = _ref6.density,
      maxRadius = _ref6.maxRadius;

  var w = getWidth({ width: width });
  var h = getHeight({ height: height });
  var dotCount = Math.floor(width * height * density);

  var circles = Array.apply(undefined, _toConsumableArray(Array(dotCount))).map(function (val, index) {
    var cx = Math.floor(Math.random() * w);
    var cy = Math.floor(Math.random() * h);
    var r = Math.floor(Math.random() * maxRadius);
    return React.createElement('circle', { key: index, cx: cx, cy: cy, r: r });
  });

  return circles;
}

module.exports = function (_ref7) {
  var children = _ref7.children,
      backgroundColor = _ref7.backgroundColor,
      dotColor = _ref7.dotColor,
      width = _ref7.width,
      height = _ref7.height,
      density = _ref7.density,
      maxRadius = _ref7.maxRadius;
  return React.createElement(
    'div',
    { style: getStyles({ backgroundColor: backgroundColor }) },
    React.createElement(
      'svg',
      {
        style: { position: 'absolute', top: 0, left: 0 },
        width: getWidth({ width: width }),
        height: getHeight({ height: height }),
        viewBox: getViewbox({ width: width, height: height }),
        version: '1.1'
      },
      React.createElement(
        'g',
        { fill: getDotColor({ dotColor: dotColor }) },
        renderCircles({ width: width, height: height, density: density, maxRadius: maxRadius })
      )
    ),
    children
  );
};