const React = require('react');
const _ = require('lodash');
const utilities = require('../../utilities');

const fonts = ['montserrat'];

function getClassName({ size, font, color }) {
  let classes = [];

  if (_.findIndex(fonts, font)) {
    classes = [...classes, `vs-text-${font}--${size}`];
  }

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

module.exports = ({ children, tag, style, size, font, color }) =>
  React.createElement(
    tag || 'span',
    {
      style: getStyles({ style, size, font, color, tag }),
      className: getClassName({ size, font, color })
    },
    children
  );
