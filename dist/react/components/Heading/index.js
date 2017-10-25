'use strict';

var React = require('react');
var Text = require('../Text');

module.exports = function (_ref) {
  var children = _ref.children,
      style = _ref.style,
      size = _ref.size,
      textColor = _ref.textColor;
  return React.createElement('h' + size, {
    className: 'vs-h' + size
  }, React.createElement(Text, {
    style: style,
    size: 7 - size,
    font: 'helvetica',
    color: textColor
  }, children));
};