'use strict';

var React = require('react');
var Text = require('../Text');

module.exports = function (_ref) {
  var children = _ref.children,
      style = _ref.style,
      size = _ref.size,
      textColor = _ref.textColor;
  return React.createElement(
    'p',
    { className: 'vs-p' },
    React.createElement(
      Text,
      { style: style, size: 0, font: 'helvetica', color: textColor },
      children
    )
  );
};