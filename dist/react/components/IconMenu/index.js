'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var React = require('react');
var Icon = require('../Icon');
var BackgroundColor = require('../BackgroundColor');

var toEdgeStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};

function getClassName(_ref) {
  var base = _ref.base,
      mode = _ref.mode;

  var classes = [base];

  if (mode) {
    classes = [].concat(_toConsumableArray(classes), [base + '--' + mode]);
  }

  return classes.join(' ');
}

module.exports = function (_ref2) {
  var backgroundColor = _ref2.backgroundColor,
      iconColor = _ref2.iconColor,
      mode = _ref2.mode;
  return React.createElement(
    Icon,
    { backgroundColor: backgroundColor },
    React.createElement(
      'div',
      {
        className: getClassName({ base: 'vs-icon-menu-top', mode: mode }),
        style: { position: 'relative' }
      },
      React.createElement(BackgroundColor, { color: iconColor, style: toEdgeStyles })
    ),
    React.createElement(
      'div',
      {
        className: getClassName({ base: 'vs-icon-menu-bottom', mode: mode }),
        style: { position: 'relative' }
      },
      React.createElement(BackgroundColor, { color: iconColor, style: toEdgeStyles })
    )
  );
};