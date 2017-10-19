'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var React = require('react');
var BackgroundColor = require('../BackgroundColor');

function getStyle(_ref) {
  var style = _ref.style;

  var newStyle = {
    display: 'flex',
    overflow: 'hidden'
  };

  return Object.assign({}, style, newStyle);
}

function getClassName(_ref2) {
  var size = _ref2.size;

  var classes = [];

  if (size) {
    classes = [].concat(_toConsumableArray(classes), ['vs-circle--' + size]);
  }

  return classes.join(' ');
}

module.exports = function (props) {
  return React.createElement(
    'div',
    { style: getStyle(props), className: getClassName(props) },
    React.createElement(BackgroundColor, {
      color: props.backgroundColor,
      style: { height: '100%', width: '100%' }
    })
  );
};