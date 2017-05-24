const React = require('react');

function style({ width, height, color }) {
  return {
    width: width ? width * 16 : '',
    height: height ? height * 16 : '',
    backgroundColor: '' || color,
  };
}

module.exports = (props) => (
  <div style={style(props)} />
);
