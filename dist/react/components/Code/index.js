const React = require('react');

module.exports = ({ children }) => React.createElement(
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