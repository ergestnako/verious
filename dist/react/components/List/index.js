'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var React = require('react');

function getClassName(_ref) {
  var unstyled = _ref.unstyled;

  var classes = ['vs-ul'];

  if (unstyled) {
    classes = [].concat(_toConsumableArray(classes), ['vs-ul--unstyled']);
  }

  return classes.join(' ');
}

module.exports = function (_ref2) {
  var children = _ref2.children,
      unstyled = _ref2.unstyled;
  return React.createElement(
    'ul',
    { className: getClassName({ unstyled: unstyled }) },
    children
  );
};