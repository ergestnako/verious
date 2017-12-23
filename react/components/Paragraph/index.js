const React = require('react');
const Text = require('../Text');

module.exports = ({ children, style, size, textColor }) => (
  <p>
    <Text style={style} size={1} font="helvetica" color={textColor}>
      {children}
    </Text>
  </p>
);
