const React = require('react');
const Text = require('../Text');

module.exports = ({ children, style, size, textColor }) => (
  <p
    className="vs-p"
  >
    <Text
      style={style}
      size={0}
      font="helvetica"
      color={textColor}
    >
      {children}
    </Text>
  </p>
);
