const React = require('react');

function style({ size, color }) {
  return {
    width: `${size * 16}px`,
    height: `${size * 16}px`,
    backgroundColor: '' || color,
  };
}

module.exports = (props) => (
  <div style={style(props)} />
);
