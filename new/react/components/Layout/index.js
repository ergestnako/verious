const React = require('react');
const utilities = require('../../utilities');

function getClassName({ direction, backgroundColor }) {
  const classes = [
    'vs-layout',
    direction === 'horizontal' ? 'vs-layout--horizontal' : 'vs-layout--vertical',
  ];

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

module.exports = ({ children, direction, backgroundColor, style }) => (
  <div
    className={getClassName({ direction, backgroundColor })}
    style={getStyles({ direction, backgroundColor, style })}
  >
    {children}
  </div>
);
