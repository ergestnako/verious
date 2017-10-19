const React = require('react');
const utilities = require('../../utilities');

function getClassName({ color }) {
  const classes = [];

  if (color) {
    if (utilities.isInternalColor(color)) {
      classes.push(`vs-background-color--${color.slice(3)}`);
    }
  }

  return classes.join(' ');
}

function getStyles({ style, color }) {
  const newStyle = {};

  if (color) {
    if (!utilities.isInternalColor(color)) {
      newStyle.backgroundColor = color;
    }
  }

  return Object.assign({}, style, newStyle);
}

module.exports = props => (
  <div className={getClassName(props)} style={getStyles(props)}>
    {props.children}
  </div>
);
