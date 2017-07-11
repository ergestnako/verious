const React = require('react');
const utilities = require('../../utilities');

function getClassName({ backgroundColor, padding }) {
  let classes = [];

  if (backgroundColor) {
    if (utilities.isInternalColor(backgroundColor)) {
      classes.push(`vs-background-color--${backgroundColor.slice(3)}`);
    }
  }

  if (padding) {
    classes = [...classes, `vs-padding-top-${padding[0]}`, `vs-padding-right-${padding[1]}`, `vs-padding-bottom-${padding[2]}`, `vs-padding-left-${padding[3]}`];
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

module.exports = ({ children, style, backgroundColor, padding }) => React.createElement(
  'div',
  {
    style: getStyles({ style, backgroundColor }),
    className: getClassName({ backgroundColor, padding })
  },
  children
);