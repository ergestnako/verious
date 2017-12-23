'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var React = require('react');
var Text = require('../Text');

module.exports = function (_ref) {
  var children = _ref.children,
      style = _ref.style,
      size = _ref.size,
      textColor = _ref.textColor;
  return React.createElement('h' + size, {}, React.createElement(Text, _defineProperty({
    style: style,
    size: 7 - size,
    font: 'helvetica',
    color: textColor
  }, 'style', {
    fontWeight: 'bold',
    marginBottom: '2rem'
  }), children));
};