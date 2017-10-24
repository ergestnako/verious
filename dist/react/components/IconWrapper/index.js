'use strict';

var React = require('react');
var Square = require('../Square');
var Layout = require('../Layout');

module.exports = function (_ref) {
  var children = _ref.children,
      backgroundColor = _ref.backgroundColor;
  return React.createElement(
    Square,
    {
      size: 3,
      style: { position: 'relative' },
      backgroundColor: backgroundColor
    },
    React.createElement(
      Layout,
      {
        direction: 'center',
        style: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }
      },
      children
    )
  );
};