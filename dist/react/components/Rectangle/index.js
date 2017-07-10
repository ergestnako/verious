const React = require('react');

function style({ width, height, color }) {
  return {
    width: width ? `${width}rem` : '',
    height: height ? `${height}rem` : '',
    backgroundColor: '' || color
  };
}

module.exports = props => React.createElement('div', { style: style(props) });