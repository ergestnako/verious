const React = require('react');

module.exports = ({ children }) => React.createElement(
  "div",
  { className: "vs-presentation", "data-script": "vsPresentation" },
  children
);