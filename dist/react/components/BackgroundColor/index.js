'use strict';

var React = require('react');
var utilities = require('../../utilities');

function getClassName(_ref) {
  var color = _ref.color;

  var classes = [];

  if (color) {
    if (utilities.isInternalColor(color)) {
      classes.push('vs-background-color--' + color.slice(3));
    }
  }

  return classes.join(' ');
}

function getStyles(_ref2) {
  var color = _ref2.color;

  var styles = {};

  if (color) {
    if (!utilities.isInternalColor(color)) {
      styles.backgroundColor = color;
    }
  }

  return Object.assign({}, styles);
}

module.exports = function (_ref3) {
  var children = _ref3.children,
      color = _ref3.color;
  return React.createElement(
    'div',
    {
      className: getClassName({ color: color }),
      style: getStyles({ color: color })
    },
    children
  );
};