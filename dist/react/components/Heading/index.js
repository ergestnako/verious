'use strict';

var React = require('react');
var utilities = require('../../utilities');

function getClassName(_ref) {
  var size = _ref.size,
      backgroundColor = _ref.backgroundColor,
      textColor = _ref.textColor;

  var classes = ['vs-h' + size];

  if (backgroundColor) {
    if (utilities.isInternalColor(backgroundColor)) {
      classes.push('vs-background-color--' + backgroundColor.slice(3));
    }
  }

  if (textColor) {
    if (utilities.isInternalColor(textColor)) {
      classes.push('vs-text-color--' + textColor.slice(3));
    }
  }

  return classes.join(' ');
}

function getStyles(_ref2) {
  var style = _ref2.style,
      backgroundColor = _ref2.backgroundColor,
      textColor = _ref2.textColor;

  var styles = {};

  if (backgroundColor) {
    if (!utilities.isInternalColor(backgroundColor)) {
      styles.backgroundColor = backgroundColor;
    }
  }

  if (textColor) {
    if (!utilities.isInternalColor(textColor)) {
      styles.color = textColor;
    }
  }

  return Object.assign({}, style, styles);
}

module.exports = function (_ref3) {
  var children = _ref3.children,
      style = _ref3.style,
      size = _ref3.size,
      textColor = _ref3.textColor;
  return React.createElement('h' + size, {
    className: getClassName({ children: children, size: size, textColor: textColor }),
    style: getStyles({ children: children, style: style, size: size, textColor: textColor })
  }, children);
};