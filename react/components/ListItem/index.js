const React = require('react');
const Text = require('../Text');

module.exports = ({ children, style, textColor }) => (
  <li style={style}>
    <Text style={style} size={1} font="helvetica" color={textColor}>
      {children}
    </Text>
  </li>
);
