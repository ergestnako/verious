const React = require('react');
const utilities = require('../../utilities');

function getClassName({ backgroundColor }) {
  const classes = [];

  if (backgroundColor) {
    if (utilities.isInternalColor(backgroundColor)) {
      classes.push(`vs-background-color--${backgroundColor.slice(3)}`);
    }
  }

  return classes.join(' ');
}

function getStyles({ size, style, backgroundColor }) {
  const styles = {
    width: `${size}rem`,
    height: `${size}rem`,
  };

  if (backgroundColor) {
    if (!utilities.isInternalColor(backgroundColor)) {
      styles.backgroundColor = backgroundColor;
    }
  }

  return Object.assign({}, style, styles);
}

module.exports = (props) => (
  <div
    style={getStyles(props)}
    className={getClassName(props)}
  />
);
