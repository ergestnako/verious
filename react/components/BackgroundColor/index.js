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

function getStyles({ color }) {
  const styles = {};

  if (color) {
    if (!utilities.isInternalColor(color)) {
      styles.backgroundColor = color;
    }
  }

  return Object.assign({}, styles);
}

module.exports = ({ children, color }) =>
  (<div
    className={getClassName({ color })}
    style={getStyles({ color })}
  >
    {children}
  </div>);
