const React = require('react');

function getClassName({ depth }) {
  return `vs-shadow--${depth}`;
}

module.exports = ({ depth, children }) => (
  <div className={getClassName({ depth })}>{children}</div>
);
