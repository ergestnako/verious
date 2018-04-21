import React from 'react';
import Icon from '../Icon';

function getClassName({ base, mode, iconColor }) {
  let classes = [base];

  classes = [...classes, `vs-background-color-${iconColor}`];

  if (mode) {
    classes = [...classes, `${base}-${mode}`];
  }

  return classes.join(' ');
}

module.exports = ({ backgroundColor, iconColor, mode }) => (
  <Icon backgroundColor={backgroundColor}>
    <div
      className={getClassName({ base: 'vs-icon-menu-top', mode, iconColor })}
    />
    <div
      className={getClassName({ base: 'vs-icon-menu-bottom', mode, iconColor })}
    />
  </Icon>
);
