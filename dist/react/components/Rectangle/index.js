'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var React = require('react');
var BackgroundColor = require('../BackgroundColor');

function getClassName(_ref) {
  var width = _ref.width,
      height = _ref.height;

  var classes = ['vs-rectangle'];

  if (width) {
    if (Array.isArray(width)) {
      classes = [].concat(_toConsumableArray(classes), ['vs-width--sm-' + width[0], 'vs-width--md-' + width[1], 'vs-width--lg-' + width[2], 'vs-width--xl-' + width[3]]);
    } else {
      classes = [].concat(_toConsumableArray(classes), ['vs-width--' + width]);
    }
  }

  if (height) {
    if (Array.isArray(height)) {
      classes = [].concat(_toConsumableArray(classes), ['vs-height--sm-' + height[0], 'vs-height--md-' + height[1], 'vs-height--lg-' + height[2], 'vs-height--xl-' + height[3]]);
    } else {
      classes = [].concat(_toConsumableArray(classes), ['vs-height--' + height]);
    }
  }

  return classes.join(' ');
}

module.exports = function (props) {
  return React.createElement(
    'div',
    { className: getClassName(props) },
    React.createElement(
      BackgroundColor,
      {
        color: props.backgroundColor,
        style: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }
      },
      props.children && props.children
    )
  );
};