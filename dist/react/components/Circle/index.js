'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var React = require('react');
var BackgroundColor = require('../BackgroundColor');

function getClassName(_ref) {
  var size = _ref.size;

  var classes = ['vs-circle'];

  if (size) {
    classes = [].concat(_toConsumableArray(classes), ['vs-circle--' + size]);
  }

  return classes.join(' ');
}

module.exports = function (props) {
  return React.createElement(
    'div',
    { style: props.style, className: getClassName(props) },
    React.createElement(BackgroundColor, {
      color: props.backgroundColor,
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    }),
    props.children && props.children
  );
};