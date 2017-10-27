'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var React = require('react');
var BackgroundColor = require('../BackgroundColor');

function getClassName(_ref) {
  var height = _ref.height;

  var classes = ['vs-vertical-rule'];

  if (height) {
    classes = [].concat(_toConsumableArray(classes), ['vs-vertical-rule--' + height]);
  }

  return classes.join(' ');
}

module.exports = function (_ref2) {
  var height = _ref2.height,
      style = _ref2.style,
      lineColor = _ref2.lineColor;
  return React.createElement(
    BackgroundColor,
    { color: lineColor, style: { display: 'table' } },
    React.createElement('div', { className: getClassName({ height: height }) })
  );
};