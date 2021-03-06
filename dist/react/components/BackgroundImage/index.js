"use strict";

var React = require('react');

function getStyle(_ref) {
  var style = _ref.style,
      source = _ref.source;

  return Object.assign({}, style, {
    backgroundImage: "url('" + source + "')"
  });
}

module.exports = function (_ref2) {
  var children = _ref2.children,
      style = _ref2.style,
      source = _ref2.source;
  return React.createElement(
    "div",
    { className: "vs-background-image", style: getStyle({ style: style, source: source }) },
    children
  );
};