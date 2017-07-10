const React = require('react');

module.exports = ({ children, size }) => React.createElement(
  `h${size}`,
  { className: `vs-h${size}` },
  children,
);
