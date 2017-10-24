const React = require('react');
const IconWrapper = require('../IconWrapper');

module.exports = ({ children, onClick, backgroundColor }) => (
  <div
    role="button"
    tabIndex={0}
    onClick={onClick}
    style={{ display: 'inline-block' }}
  >
    <IconWrapper backgroundColor={backgroundColor}>{children}</IconWrapper>
  </div>
);
