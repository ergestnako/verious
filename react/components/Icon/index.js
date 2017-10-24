const React = require('react');
const BackgroundColor = require('../BackgroundColor');

module.exports = ({ children, backgroundColor }) => (
  <BackgroundColor color={backgroundColor} style={{ display: 'table' }}>
    <div className="vs-icon">{children}</div>
  </BackgroundColor>
);
