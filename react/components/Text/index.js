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

function getStyles({ style, color }) {
  const styles = {};

  if (color) {
    if (!utilities.isInternalColor(color)) {
      styles.color = color;
    }
  }

  return Object.assign({}, style, styles);
}

module.exports = ({ children, style, size, font, color }) =>
  (<div
    className={getClassName({ size, font, color })}
    style={getStyles({ style, size, font, color })}
  >
    {children}
  </div>);
