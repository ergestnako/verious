'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var React = require('react');
var utilities = require('../../utilities');

function getClassName(_ref) {
  var backgroundColor = _ref.backgroundColor,
      padding = _ref.padding,
      visibility = _ref.visibility;

  var classes = [];

  if (backgroundColor) {
    if (utilities.isInternalColor(backgroundColor)) {
      classes.push('vs-background-color--' + backgroundColor.slice(3));
    }
  }

  if (padding) {
    classes = [].concat(_toConsumableArray(classes), ['vs-padding-top-' + padding[0], 'vs-padding-right-' + padding[1], 'vs-padding-bottom-' + padding[2], 'vs-padding-left-' + padding[3]]);
  }

  if (visibility) {
    classes = [].concat(_toConsumableArray(classes), ['vs-padding-top-' + padding[0], 'vs-padding-right-' + padding[1], 'vs-padding-bottom-' + padding[2], 'vs-padding-left-' + padding[3]]);

    if (visibility[0] === false) {
      classes = [].concat(_toConsumableArray(classes), ['vs-hidden-sm']);
    }

    if (visibility[1] === false) {
      classes = [].concat(_toConsumableArray(classes), ['vs-hidden-md']);
    }

    if (visibility[2] === false) {
      classes = [].concat(_toConsumableArray(classes), ['vs-hidden-lg']);
    }

    if (visibility[3] === false) {
      classes = [].concat(_toConsumableArray(classes), ['vs-hidden-xl']);
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
      style = _ref3.style,
      backgroundColor = _ref3.backgroundColor,
      padding = _ref3.padding,
      visibility = _ref3.visibility;
  return React.createElement(
    'div',
    {
      style: getStyles({ style: style, backgroundColor: backgroundColor }),
      className: getClassName({ backgroundColor: backgroundColor, padding: padding, visibility: visibility })
    },
    children
  );
};