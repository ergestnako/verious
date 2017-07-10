const React = require('react');

function getClassName({ backgroundColor }) {
  const classes = [];

  if (backgroundColor) {
    if (backgroundColor.includes('vs-')) {
      classes.push(`vs-background-color--${backgroundColor.slice(3)}`);
    }
  }

  return classes.join(' ');
}

function getStyles({ width, height, backgroundColor }) {
  const styles = {
    width: width ? `${width}rem` : '',
    height: height ? `${height}rem` : '',
  };

  if (backgroundColor) {
    if (!backgroundColor.includes('vs-')) {
      styles.backgroundColor = backgroundColor;
    }
  }

  return styles;
}

module.exports = (props) => (
  <div
    style={getStyles(props)}
    className={getClassName(props)}
  />
);
