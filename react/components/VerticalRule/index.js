const React = require('react');
const BackgroundColor = require('../BackgroundColor');

function getClassName({ height }) {
  let classes = ['vs-vertical-rule'];

  if (height) {
    classes = [...classes, `vs-vertical-rule--${height}`];
  }

  return classes.join(' ');
}

module.exports = ({ height, style, lineColor }) => (
  <BackgroundColor color={lineColor} style={{ display: 'table' }}>
    <div className={getClassName({ height })} />
  </BackgroundColor>
);
