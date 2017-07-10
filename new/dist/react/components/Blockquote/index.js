const React = require('react');

module.exports = ({ children }) => React.createElement(
  "div",
  { className: "verious" },
  React.createElement(
    "blockquote",
    null,
    children
  )
);