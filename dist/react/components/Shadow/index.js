'use strict';

var React = require('react');

function getClassName(_ref) {
  var depth = _ref.depth;

  return 'vs-shadow--' + depth;
}

module.exports = function (_ref2) {
  var depth = _ref2.depth,
      children = _ref2.children;
  return React.createElement(
    'div',
    { className: getClassName({ depth: depth }) },
    children
  );
};