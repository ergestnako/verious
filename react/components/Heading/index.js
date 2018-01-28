const React = require('react');
const Text = require('../Text');

module.exports = ({ children, style, size, textColor }) =>
  React.createElement(
    Text,
    {
      tag: `h${size}`,
      style: {
        ...style,
        fontWeight: 'bold',
        marginBottom: '2rem'
      },
      size: 7 - size,
      color: textColor
    },
    children
  );
