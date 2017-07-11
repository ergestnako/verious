const React = require('react');
const utilities = require('../../utilities');

function getClassName({ backgroundColor, textColor }) {
  let classes = ['vs-button'];

  if (backgroundColor) {
    if (utilities.isInternalColor(backgroundColor)) {
      classes = [...classes, `vs-background-color--${backgroundColor.slice(3)}`];
    }
  }

  if (textColor) {
    if (utilities.isInternalColor(textColor)) {
      classes = [...classes, `vs-text-color--${textColor.slice(3)}`];
    }
  }

  return classes.join(' ');
}

function getStyle({ style, backgroundColor, textColor }) {
  const styles = {};

  if (backgroundColor) {
    if (!utilities.isInternalColor(backgroundColor)) {
      styles.backgroundColor = backgroundColor;
    }
  }

  if (textColor) {
    if (!utilities.isInternalColor(textColor)) {
      styles.textColor = textColor;
    }
  }

  return Object.assign({}, style, styles);
}

module.exports = ({ style, label, onClick, backgroundColor, textColor }) => (
  <button
    className={getClassName({ backgroundColor, textColor })}
    style={getStyle({ style })}
    onClick={onClick}
  >
    { label }
  </button>
);
