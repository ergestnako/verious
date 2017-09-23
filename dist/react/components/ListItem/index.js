'use strict';

var React = require('react');
var Text = require('../Text');

module.exports = function (_ref) {
  var children = _ref.children,
      style = _ref.style,
      textColor = _ref.textColor;
  return React.createElement(
    'li',
    {
      className: 'vs-li',
      style: style
    },
    React.createElement(
      Text,
      {
        style: style,
        size: 0,
        font: 'helvetica',
        color: textColor
      },
      children
    )
  );
};