const React = require('react');
const Text = require('../Text');

module.exports = ({ children, style, size, textColor }) => React.createElement(
  `h${size}`,
  {
    className: `vs-h${size}`,
  },
  React.createElement(
    Text,
    {
      style,
      size: 6 - size,
      font: 'helvetica',
      color: textColor,
    },
    children,
  ),
);
