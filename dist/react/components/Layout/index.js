'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var React = require('react');
var utilities = require('../../utilities');

function getClassName(_ref) {
  var direction = _ref.direction,
      backgroundColor = _ref.backgroundColor;

  var classes = ['vs-layout'];

  switch (direction) {
    case 'horizontal':
      classes = [].concat(_toConsumableArray(classes), ['vs-layout--horizontal']);
      break;
    case 'vertical':
      classes = [].concat(_toConsumableArray(classes), ['vs-layout--vertical']);
      break;
    case 'center':
      classes = [].concat(_toConsumableArray(classes), ['vs-layout--center']);
      break;
    default:
      break;
  }

  if (backgroundColor) {
    if (utilities.isInternalColor(backgroundColor)) {
      classes.push('vs-background-color--' + backgroundColor.slice(3));
    }
  }

  return classes.join(' ');
}

function getStyles(_ref2) {
  var style = _ref2.style,
      backgroundColor = _ref2.backgroundColor;

  var styles = {};

  if (backgroundColor) {
    if (!utilities.isInternalColor(backgroundColor)) {
      styles.backgroundColor = backgroundColor;
    }
  }

  return Object.assign({}, style, styles);
}

module.exports = function (_ref3) {
  var children = _ref3.children,
      direction = _ref3.direction,
      backgroundColor = _ref3.backgroundColor,
      style = _ref3.style;
  return React.createElement(
    'div',
    {
      className: getClassName({ direction: direction, backgroundColor: backgroundColor }),
      style: getStyles({ direction: direction, backgroundColor: backgroundColor, style: style })
    },
    children
  );
};