"use strict";

var React = require('react');

module.exports = function (_ref) {
  var children = _ref.children;
  return React.createElement(
    "div",
    { className: "vs-horizontal-scroll-item" },
    children
  );
};