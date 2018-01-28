'use strict';

var React = require('react');
var Text = require('../Text');

module.exports = function (_ref) {
  var children = _ref.children,
      style = _ref.style,
      textColor = _ref.textColor;
  return React.createElement(
    Text,
    { tag: 'li', style: style, size: 1, color: textColor },
    children
  );
};