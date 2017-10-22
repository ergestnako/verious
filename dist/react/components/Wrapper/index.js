'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var React = require('react');

var edges = ['top', 'right', 'bottom', 'left'];

function getClassName(_ref) {
  var padding = _ref.padding,
      margin = _ref.margin,
      pull = _ref.pull,
      visibility = _ref.visibility;

  var classes = [];

  if (padding) {
    for (var i = 0; i < padding.length; i += 1) {
      var p = padding[i];
      if (typeof p === 'number') {
        classes = [].concat(_toConsumableArray(classes), ['vs-padding-' + edges[i] + '-' + p]);
      } else if (Array.isArray(p)) {
        classes = [].concat(_toConsumableArray(classes), ['vs-sm-padding-' + edges[i] + '-' + p[0], 'vs-md-padding-' + edges[i] + '-' + p[1], 'vs-lg-padding-' + edges[i] + '-' + p[2], 'vs-xl-padding-' + edges[i] + '-' + p[3]]);
      }
    }
  }

  if (margin) {
    for (var _i = 0; _i < padding.length; _i += 1) {
      var _p = margin[_i];
      if (typeof _p === 'number') {
        classes = [].concat(_toConsumableArray(classes), ['vs-margin-' + edges[_i] + '-' + _p]);
      } else if (Array.isArray(_p)) {
        classes = [].concat(_toConsumableArray(classes), ['vs-sm-margin-' + edges[_i] + '-' + _p[0], 'vs-md-margin-' + edges[_i] + '-' + _p[1], 'vs-lg-margin-' + edges[_i] + '-' + _p[2], 'vs-xl-margin-' + edges[_i] + '-' + _p[3]]);
      }
    }
  }

  if (pull) {
    for (var _i2 = 0; _i2 < padding.length; _i2 += 1) {
      var _p2 = pull[_i2];
      if (typeof _p2 === 'number') {
        classes = [].concat(_toConsumableArray(classes), ['vs-pull-' + edges[_i2] + '-' + _p2]);
      } else if (Array.isArray(_p2)) {
        classes = [].concat(_toConsumableArray(classes), ['vs-sm-pull-' + edges[_i2] + '-' + _p2[0], 'vs-md-pull-' + edges[_i2] + '-' + _p2[1], 'vs-lg-pull-' + edges[_i2] + '-' + _p2[2], 'vs-xl-pull-' + edges[_i2] + '-' + _p2[3]]);
      }
    }
  }

  if (visibility) {
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
      margin = _ref2.margin,
      pull = _ref2.pull,
      visibility = _ref2.visibility;
  return React.createElement(
    'div',
    {
      style: style,
      className: getClassName({ padding: padding, margin: margin, pull: pull, visibility: visibility })
    },
    children
  );
};