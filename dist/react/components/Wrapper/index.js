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

function getStyles({ style, backgroundColor }) {
  const styles = {};

  if (backgroundColor) {
    if (!utilities.isInternalColor(backgroundColor)) {
      styles.backgroundColor = backgroundColor;
    }
  }

  return Object.assign({}, style, styles);
}

module.exports = ({ children, style, backgroundColor }) => React.createElement(
  'div',
  {
    style: getStyles({ style, backgroundColor }),
    className: getClassName({ backgroundColor })
  },
  children
);