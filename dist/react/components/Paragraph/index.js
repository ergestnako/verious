'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var Text = require('../Text');

module.exports = function (_ref) {
  var children = _ref.children,
      style = _ref.style,
      size = _ref.size,
      textColor = _ref.textColor;
  return React.createElement(
    Text,
    {
      tag: 'p',
      style: _extends({}, style, { marginBottom: '2rem' }),
      size: 1,
      color: textColor
    },
    children
  );
};