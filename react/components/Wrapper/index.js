const React = require('react');
const utilities = require('../../utilities');

function getClassName({ backgroundColor, padding, visibility }) {
  let classes = [];

  if (backgroundColor) {
    if (utilities.isInternalColor(backgroundColor)) {
      classes.push(`vs-background-color--${backgroundColor.slice(3)}`);
    }
  }

  if (padding) {
    classes = [
      ...classes,
      `vs-padding-top-${padding[0]}`,
      `vs-padding-right-${padding[1]}`,
      `vs-padding-bottom-${padding[2]}`,
      `vs-padding-left-${padding[3]}`,
    ];
  }

  if (visibility) {
    classes = [
      ...classes,
      `vs-padding-top-${padding[0]}`,
      `vs-padding-right-${padding[1]}`,
      `vs-padding-bottom-${padding[2]}`,
      `vs-padding-left-${padding[3]}`,
    ];

    if (visibility[0] === false) {
      classes = [...classes, 'vs-hidden-sm'];
    }

    if (visibility[1] === false) {
      classes = [...classes, 'vs-hidden-md'];
    }

    if (visibility[2] === false) {
      classes = [...classes, 'vs-hidden-lg'];
    }

    if (visibility[3] === false) {
      classes = [...classes, 'vs-hidden-xl'];
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

module.exports = ({ children, style, backgroundColor, padding, visibility }) =>
  (<div
    style={getStyles({ style, backgroundColor })}
    className={getClassName({ backgroundColor, padding, visibility })}
  >
    {children}
  </div>);
