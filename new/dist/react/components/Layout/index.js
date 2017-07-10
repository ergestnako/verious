const React = require('react');

function getClassName({ direction }) {
  const classes = ['vs-layout', direction === 'horizontal' ? 'vs-layout--horizontal' : 'vs-layout--vertical'];

  return classes.join(' ');
}

function getStyle({ style, color }) {
  return Object.assign({}, style, {
    backgroundColor: '' || color
  });
}

module.exports = ({ children, direction, color, style }) => React.createElement(
  'div',
  {
    className: getClassName({ direction, color, style }),
    style: getStyle({ direction, color, style })
  },
  children
);