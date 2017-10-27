'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var React = require('react');
var utilities = require('../../utilities');
var Layout = require('../Layout');
var Spacer = require('../Spacer');
var BackgroundColor = require('../BackgroundColor');

function getClassName(_ref) {
  var height = _ref.height;

  var classes = [];

  if (height) {
    classes = [].concat(_toConsumableArray(classes), ['vs-height--' + height]);
  }

  return classes.join(' ');
}

function getLineClassName(_ref2) {
  var lineColor = _ref2.lineColor;

  var classes = ['vs-horizontal-rule'];

  if (lineColor) {
    if (utilities.isInternalColor(lineColor)) {
      classes = [].concat(_toConsumableArray(classes), ['vs-background-color--' + lineColor.slice(3)]);
    }
  }

  return classes.join(' ');
}

module.exports = function (_ref3) {
  var height = _ref3.height,
      style = _ref3.style,
      lineColor = _ref3.lineColor;
  return React.createElement(
    'div',
    { className: getClassName({ height: height }) },
    React.createElement(
      Layout,
      { direction: 'vertical', style: { height: '100%' } },
      React.createElement(Spacer, null),
      React.createElement(
        BackgroundColor,
        { color: lineColor },
        React.createElement('div', { className: getLineClassName({ lineColor: lineColor }) })
      ),
      React.createElement(Spacer, null)
    )
  );
};