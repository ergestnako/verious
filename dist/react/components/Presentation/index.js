"use strict";

var React = require('react');

module.exports = function (_ref) {
  var children = _ref.children;
  return React.createElement(
    "div",
    { className: "vs-presentation", "data-script": "vsPresentation" },
    children
  );
};