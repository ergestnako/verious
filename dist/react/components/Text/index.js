'use strict';

var React = require('react');
var _ = require('lodash');

var fonts = ['montserrat'];

function getClassName(_ref) {
  var size = _ref.size,
      font = _ref.font;

  var className = '';

  if (_.findIndex(fonts, font)) {
    className = 'vs-type-' + font + '--' + size;
  }

  return className;
}

module.exports = function (_ref2) {
  var size = _ref2.size,
      font = _ref2.font;
  return React.createElement(
    'div',
    { className: getClassName({ size: size, font: font }) },
    'Hello World'
  );
};