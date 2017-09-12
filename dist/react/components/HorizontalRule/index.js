'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var React = require('react');
var utilities = require('../../utilities');
var Layout = require('../Layout');
var Spacer = require('../Spacer');

function getClassName(_ref) {
  var backgroundColor = _ref.backgroundColor,
      height = _ref.height;

  var classes = ['vs-horizontal-rule'];

  if (backgroundColor) {
    if (utilities.isInternalColor(backgroundColor)) {
      classes = [].concat(_toConsumableArray(classes), ['vs-background-color--' + backgroundColor.slice(3)]);
    }
  }

  if (height) {
    classes = [].concat(_toConsumableArray(classes), ['vs-horizontal-rule--' + height]);
  }

  return classes.join(' ');
}

function getStyle(_ref2) {
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

function getLineClassName(_ref3) {
  var lineColor = _ref3.lineColor;

  var classes = ['vs-horizontal-rule-line'];

  if (lineColor) {
    if (utilities.isInternalColor(lineColor)) {
      classes = [].concat(_toConsumableArray(classes), ['vs-background-color--' + lineColor.slice(3)]);
    }
  }

  return classes.join(' ');
}

function getLineStyle(_ref4) {
  var style = _ref4.style,
      lineColor = _ref4.lineColor;

  var styles = {};

  if (lineColor) {
    if (!utilities.isInternalColor(lineColor)) {
      styles.backgroundColor = lineColor;
    }
  }

  return Object.assign({}, style, styles);
}

module.exports = function (_ref5) {
  var height = _ref5.height,
      style = _ref5.style,
      backgroundColor = _ref5.backgroundColor,
      lineColor = _ref5.lineColor;
  return React.createElement(
    'div',
    {
      className: getClassName({ backgroundColor: backgroundColor, height: height }),
      style: getStyle({ style: style, backgroundColor: backgroundColor })
    },
    React.createElement(
      Layout,
      { direction: 'vertical', style: { height: '100%' } },
      React.createElement(Spacer, null),
      React.createElement('div', { className: getLineClassName({ lineColor: lineColor }), style: getLineStyle({ style: style, lineColor: lineColor }) }),
      React.createElement(Spacer, null)
    )
  );
};