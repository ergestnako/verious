const React = require('react');

function style({ size, color }) {
  return {
    width: `${size}rem`,
    height: `${size}rem`,
    backgroundColor: '' || color,
  };
}

module.exports = (props) => (
  <div style={style(props)} />
);
