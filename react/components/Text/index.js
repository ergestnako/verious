const React = require('react');
const utilities = require('../../utilities');

function getClassName({ size, color }) {
  let classes = [];

  classes = [...classes, `vs-text-system--${size}`];

  if (color) {
    if (utilities.isInternalColor(color)) {
      classes = [...classes, `vs-text-color--${color.slice(3)}`];
    }
  }

  return classes.join(' ');
}

function getStyles({ style, color, tag }) {
  const styles = {
    display: tag || 'block'
  };

  if (color) {
    if (!utilities.isInternalColor(color)) {
      styles.color = color;
    }
  }

  return Object.assign({}, style, styles);
}

module.exports = ({ children, tag, style, size, color }) =>
  React.createElement(
    tag || 'span',
    {
      style: getStyles({ style, size, color, tag }),
      className: getClassName({ size, color })
    },
    children
  );
