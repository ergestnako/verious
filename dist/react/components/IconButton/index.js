'use strict';

var React = require('react');
var IconWrapper = require('../IconWrapper');

module.exports = function (_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      backgroundColor = _ref.backgroundColor;
  return React.createElement(
    'div',
    {
      role: 'button',
      tabIndex: 0,
      onClick: onClick,
      style: { display: 'inline-block' }
    },
    React.createElement(
      IconWrapper,
      { backgroundColor: backgroundColor },
      children
    )
  );
};