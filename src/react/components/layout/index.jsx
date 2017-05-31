const React = require('react');

function getStyle({ direction, color, style }) {
  return Object.assign({}, style, {
    display: 'flex',
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    backgroundColor: '' || color,
  });
}

module.exports = ({ children, direction, color, style }) => (
  <div style={getStyle({ direction, color, style })}>
    {children}
  </div>
);
