const React = require('react');

function style(direction, color) {
  return {
    display: 'flex',
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    backgroundColor: '' || color,
  };
}

module.exports = ({ children, direction, color }) => (
  <div style={style(direction, color)}>
    {children}
  </div>
);
