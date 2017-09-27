const React = require('react');
const utilities = require('../../utilities');

function getStyles({ startColor, endColor, rotation }) {
  const styles = {};

  if (startColor && endColor) {
    let sc = startColor;
    let ec = endColor;

    if (utilities.isInternalColor(startColor)) {
      sc = utilities.getInternalColor(startColor);
    }

    if (utilities.isInternalColor(endColor)) {
      ec = utilities.getInternalColor(endColor);
    }

    styles.background = `linear-gradient(${rotation}deg,  ${sc} 0%, ${ec} 100%)`;
  }

  return Object.assign({}, styles);
}

module.exports = ({ children, startColor, endColor, rotation }) =>
  (<div
    style={getStyles({ startColor, endColor, rotation })}
  >
    {children}
  </div>);
