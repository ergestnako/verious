'use strict';

var React = require('react');
var utilities = require('../../utilities');

function getClassName(_ref) {
  var color = _ref.color;

  var classes = [];

  if (color) {
    if (utilities.isInternalColor(color)) {
      classes.push('vs-background-color--' + color.slice(3));
    }
  }

  return classes.join(' ');
}

function getStyles(_ref2) {
  var style = _ref2.style,
      color = _ref2.color;

  var newStyle = {};

  if (color) {
    if (!utilities.isInternalColor(color)) {
      newStyle.backgroundColor = color;
    }
  }

  return Object.assign({}, style, newStyle);
}

module.exports = function (props) {
  return React.createElement(
    'div',
    { className: getClassName(props), style: getStyles(props) },
    props.children
  );
};