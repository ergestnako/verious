'use strict';

var React = require('react');
var Rectangle = require('../Rectangle');

module.exports = function (props) {
  return React.createElement(
    Rectangle,
    {
      width: props.size,
      height: props.size,
      backgroundColor: props.backgroundColor,
      style: props.style
    },
    props.children && props.children
  );
};