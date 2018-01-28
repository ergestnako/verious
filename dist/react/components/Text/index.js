'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var React = require('react');
var utilities = require('../../utilities');

function getClassName(_ref) {
  var size = _ref.size,
      color = _ref.color;

  var classes = [];

  classes = [].concat(_toConsumableArray(classes), ['vs-text-system--' + size]);

  if (color) {
    if (utilities.isInternalColor(color)) {
      classes = [].concat(_toConsumableArray(classes), ['vs-text-color--' + color.slice(3)]);
    }
  }

  return classes.join(' ');
}

function getStyles(_ref2) {
  var style = _ref2.style,
      color = _ref2.color,
      tag = _ref2.tag;

  var styles = {
    display: tag || 'block'
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
      tag = _ref3.tag,
      style = _ref3.style,
      size = _ref3.size,
      color = _ref3.color;
  return React.createElement(tag || 'span', {
    style: getStyles({ style: style, size: size, color: color, tag: tag }),
    className: getClassName({ size: size, color: color })
  }, children);
};