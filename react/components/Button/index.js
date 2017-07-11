const React = require('react');

function getStyle({ style }) {
  return Object.assign({}, style);
}

module.exports = ({ style, label, onClick }) => (
  <button
    className="vs-button"
    style={getStyle({ style })}
    onClick={onClick}
  >
    { label }
  </button>
);
