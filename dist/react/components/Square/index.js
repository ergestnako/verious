const React = require('react');

function style({ size, color }) {
  return {
    width: `${size}rem`,
    height: `${size}rem`,
    backgroundColor: '' || color
  };
}

module.exports = props => React.createElement('div', { style: style(props) });