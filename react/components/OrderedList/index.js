const React = require('react');

function getClassName() {
  const classes = ['vs-ol'];
  return classes.join(' ');
}

module.exports = ({ children }) => (
  <ol className={getClassName()}>{children}</ol>
);
