'use strict';

var React = require('react');
var BackgroundColor = require('../BackgroundColor');

module.exports = function (_ref) {
  var children = _ref.children,
      backgroundColor = _ref.backgroundColor;
  return React.createElement(
    BackgroundColor,
    { color: backgroundColor, style: { display: 'table' } },
    React.createElement(
      'div',
      { className: 'vs-icon' },
      children
    )
  );
};