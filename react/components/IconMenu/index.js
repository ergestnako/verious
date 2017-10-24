const React = require('react');
const Icon = require('../Icon');
const BackgroundColor = require('../BackgroundColor');

const toEdgeStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};

function getClassName({ base, mode }) {
  let classes = [base];

  if (mode) {
    classes = [...classes, `${base}--${mode}`];
  }

  return classes.join(' ');
}

module.exports = ({ backgroundColor, iconColor, mode }) => (
  <Icon backgroundColor={backgroundColor}>
    <div
      className={getClassName({ base: 'vs-icon-menu-top', mode })}
      style={{ position: 'relative' }}
    >
      <BackgroundColor color={iconColor} style={toEdgeStyles} />
    </div>
    <div
      className={getClassName({ base: 'vs-icon-menu-bottom', mode })}
      style={{ position: 'relative' }}
    >
      <BackgroundColor color={iconColor} style={toEdgeStyles} />
    </div>
  </Icon>
);
