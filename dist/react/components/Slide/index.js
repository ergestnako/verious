'use strict';

var React = require('react');

function style(_ref) {
  var backgroundColor = _ref.backgroundColor;

  return {
    width: '100%',
    height: '100%',
    backgroundColor: '' || backgroundColor
  };
}

module.exports = function (_ref2) {
  var children = _ref2.children,
      backgroundColor = _ref2.backgroundColor;
  return React.createElement(
    'div',
    { className: 'vs-slide', style: style({ backgroundColor: backgroundColor }) },
    children
  );
};