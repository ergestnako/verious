import React from 'react';

function getClassName({ height, lineColor }) {
  let classes = ['vs-vertical-rule'];

  classes = [...classes, `vs-background-color-${lineColor}`];

  if (height) {
    classes = [...classes, `vs-vertical-rule-${height}`];
  }

  return classes.join(' ');
}

module.exports = props => <div className={getClassName(props)} />;
