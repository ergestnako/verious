const React = require('react');
const Text = require('../Text');

module.exports = ({ children, style, textColor }) => (
  <Text tag="li" style={style} size={1} color={textColor}>
    {children}
  </Text>
);
