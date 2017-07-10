const React = require('react');

module.exports = ({ children }) => React.createElement(
  "div",
  { className: "vs-container" },
  children
);