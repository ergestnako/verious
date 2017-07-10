const React = require('react');
const utilities = require('../../utilities');

function getClassName({ backgroundColor, textColor }) {
  const classes = ['vs-p'];

  if (backgroundColor) {
    if (utilities.isInternalColor(backgroundColor)) {
      classes.push(`vs-background-color--${backgroundColor.slice(3)}`);
    }
  }

  if (textColor) {
    if (utilities.isInternalColor(textColor)) {
      classes.push(`vs-text-color--${textColor.slice(3)}`);
    }
  }

  return classes.join(' ');
}

function getStyles({ style, backgroundColor, textColor }) {
  const styles = {};

  if (backgroundColor) {
    if (!utilities.isInternalColor(backgroundColor)) {
      styles.backgroundColor = backgroundColor;
    }
  }

  if (textColor) {
    if (!utilities.isInternalColor(textColor)) {
      styles.color = textColor;
    }
  }

  return Object.assign({}, style, styles);
}

module.exports = ({ children, style, size, textColor }) => (
  <p
    className={getClassName({ children, size, textColor })}
    style={getStyles({ children, style, size, textColor })}
  >
    { children }
  </p>
);
