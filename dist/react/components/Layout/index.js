'use strict';

var React = require('react');
var utilities = require('../../utilities');

function getClassName(_ref) {
  var direction = _ref.direction,
      backgroundColor = _ref.backgroundColor;

  var classes = ['vs-layout', direction === 'horizontal' ? 'vs-layout--horizontal' : 'vs-layout--vertical'];

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