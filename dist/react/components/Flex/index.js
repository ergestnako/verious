'use strict';

var React = require('react');

function getClassnames(_ref) {
  var direction = _ref.direction,
      justifyContent = _ref.justifyContent,
      alignItems = _ref.alignItems,
      wrap = _ref.wrap;

  var classNames = [];

  if (direction) {}

  if (justifyContent) {}

  if (alignItems) {}

  if (wrap) {}

  return classNames.join(' ');
}

module.exports = function (props) {
  return React.createElement(
    'div',
    { classNames: getClassnames(props) },
    children
  );
};