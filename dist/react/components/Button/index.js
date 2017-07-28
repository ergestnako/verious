'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var React = require('react');
var utilities = require('../../utilities');

function getClassName(_ref) {
  var backgroundColor = _ref.backgroundColor,
      textColor = _ref.textColor;

  var classes = ['vs-button'];

  if (backgroundColor) {
    if (utilities.isInternalColor(backgroundColor)) {
      classes = [].concat(_toConsumableArray(classes), ['vs-background-color--' + backgroundColor.slice(3)]);
    }
  }

  if (textColor) {
    if (utilities.isInternalColor(textColor)) {
      classes = [].concat(_toConsumableArray(classes), ['vs-text-color--' + textColor.slice(3)]);
    }
  }

  return classes.join(' ');
}

function getStyle(_ref2) {
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
      styles.textColor = textColor;
    }
  }

  return Object.assign({}, style, styles);
}

module.exports = function (_ref3) {
  var style = _ref3.style,
      label = _ref3.label,
      onClick = _ref3.onClick,
      backgroundColor = _ref3.backgroundColor,
      textColor = _ref3.textColor;
  return React.createElement(
    'button',
    {
      className: getClassName({ backgroundColor: backgroundColor, textColor: textColor }),
      style: getStyle({ style: style }),
      onClick: onClick
    },
    label
  );
};