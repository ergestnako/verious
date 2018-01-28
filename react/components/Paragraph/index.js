const React = require('react');
const Text = require('../Text');

module.exports = ({ children, style, size, textColor }) => (
  <Text
    tag="p"
    style={{ ...style, marginBottom: '2rem' }}
    size={1}
    color={textColor}
  >
    {children}
  </Text>
);
