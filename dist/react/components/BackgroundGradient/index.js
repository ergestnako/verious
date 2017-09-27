'use strict';

var React = require('react');
var utilities = require('../../utilities');

function getStyles(_ref) {
  var startColor = _ref.startColor,
      endColor = _ref.endColor,
      rotation = _ref.rotation;

  var styles = {};

  if (startColor && endColor) {
    var sc = startColor;
    var ec = endColor;

    if (utilities.isInternalColor(startColor)) {
      sc = utilities.getInternalColor(startColor);
    }

    if (utilities.isInternalColor(endColor)) {
      ec = utilities.getInternalColor(endColor);
    }

    styles.background = 'linear-gradient(' + rotation + 'deg,  ' + sc + ' 0%, ' + ec + ' 100%)';
  }

  return Object.assign({}, styles);
}

module.exports = function (_ref2) {
  var children = _ref2.children,
      startColor = _ref2.startColor,
      endColor = _ref2.endColor,
      rotation = _ref2.rotation;
  return React.createElement(
    'div',
    {
      style: getStyles({ startColor: startColor, endColor: endColor, rotation: rotation })
    },
    children
  );
};