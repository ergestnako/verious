"use strict";

var React = require('react');

module.exports = function (_ref) {
  var children = _ref.children;
  return React.createElement(
    "div",
    { className: "verious" },
    React.createElement(
      "pre",
      null,
      React.createElement(
        "code",
        null,
        children
      )
    )
  );
};