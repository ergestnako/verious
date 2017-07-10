const React = require('react');

function style({ width, height, color }) {
  return {
    width: width ? `${width}rem` : '',
    height: height ? `${height}rem` : '',
    backgroundColor: '' || color,
  };
}

module.exports = (props) => (
  <div style={style(props)} />
);
