const React = require('react');
const Text = require('../Text');

module.exports = ({ children, style, size, textColor }) =>
  React.createElement(
    `h${size}`,
    {},
    React.createElement(
      Text,
      {
        style,
        size: 7 - size,
        font: 'helvetica',
        color: textColor,
        style: {
          fontWeight: 'bold',
          marginBottom: '2rem'
        }
      },
      children
    )
  );
