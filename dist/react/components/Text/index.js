'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var React = require('react');
var _ = require('lodash');
var utilities = require('../../utilities');

var fonts = ['montserrat'];

function getClassName(_ref) {
  var size = _ref.size,
      font = _ref.font,
      color = _ref.color;

  var classes = [];

  if (_.findIndex(fonts, font)) {
    classes = [].concat(_toConsumableArray(classes), ['vs-text-' + font + '--' + size]);
  }

  if (color) {
    if (utilities.isInternalColor(color)) {
      classes = [].concat(_toConsumableArray(classes), ['vs-text-color--' + color.slice(3)]);
    }
  }

  return classes.join(' ');
}

function getStyles(_ref2) {
  var style = _ref2.style,
      color = _ref2.color;

  var styles = {
    display: 'inherit'
  };

  if (color) {
    if (!utilities.isInternalColor(color)) {
      styles.color = color;
    }
  }

  return Object.assign({}, style, styles);
}

module.exports = function (_ref3) {
  var children = _ref3.children,
      style = _ref3.style,
      size = _ref3.size,
      font = _ref3.font,
      color = _ref3.color;
  return React.createElement(
    'span',
    {
      className: getClassName({ size: size, font: font, color: color }),
      style: getStyles({ style: style, size: size, font: font, color: color })
    },
    children
  );
};