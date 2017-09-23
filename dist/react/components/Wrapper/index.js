'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var React = require('react');

function getClassName(_ref) {
  var padding = _ref.padding,
      visibility = _ref.visibility,
      pull = _ref.pull;

  var classes = [];

  if (padding) {
    classes = [].concat(_toConsumableArray(classes), ['vs-padding-top-' + padding[0], 'vs-padding-right-' + padding[1], 'vs-padding-bottom-' + padding[2], 'vs-padding-left-' + padding[3]]);
  }

  if (pull) {
    classes = [].concat(_toConsumableArray(classes), ['vs-pull-top-' + pull[0], 'vs-pull-right-' + pull[1], 'vs-pull-bottom-' + pull[2], 'vs-pull-left-' + pull[3]]);
  }

  if (visibility) {
    classes = [].concat(_toConsumableArray(classes), ['vs-padding-top-' + padding[0], 'vs-padding-right-' + padding[1], 'vs-padding-bottom-' + padding[2], 'vs-padding-left-' + padding[3]]);

    if (visibility[0] === false) {
      classes = [].concat(_toConsumableArray(classes), ['vs-hidden-sm']);
    }

    if (visibility[1] === false) {
      classes = [].concat(_toConsumableArray(classes), ['vs-hidden-md']);
    }

    if (visibility[2] === false) {
      classes = [].concat(_toConsumableArray(classes), ['vs-hidden-lg']);
    }

    if (visibility[3] === false) {
      classes = [].concat(_toConsumableArray(classes), ['vs-hidden-xl']);
    }
  }

  return classes.join(' ');
}

module.exports = function (_ref2) {
  var children = _ref2.children,
      style = _ref2.style,
      padding = _ref2.padding,
      visibility = _ref2.visibility,
      pull = _ref2.pull;
  return React.createElement(
    'div',
    {
      style: style,
      className: getClassName({ padding: padding, visibility: visibility, pull: pull })
    },
    children
  );
};