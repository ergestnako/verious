const React = require('react');
const BackgroundColor = require('../BackgroundColor');

function getClassName({ width, height }) {
  let classes = [];

  if (width) {
    if (Array.isArray(width)) {
      classes = [
        ...classes,
        `vs-width-sm-${width[0]}`,
        `vs-width-md-${width[1]}`,
        `vs-width-lg-${width[2]}`,
        `vs-width-xl-${width[3]}`
      ];
    } else {
      classes = [...classes, `vs-width-${width}`];
    }
  }

  if (height) {
    if (Array.isArray(width)) {
      classes = [
        ...classes,
        `vs-height-sm-${width[0]}`,
        `vs-height-md-${width[1]}`,
        `vs-height-lg-${width[2]}`,
        `vs-height-xl-${width[3]}`
      ];
    } else {
      classes = [...classes, `vs-height-${width}`];
    }
  }

  return classes.join(' ');
}

module.exports = props => (
  <div style={{ display: 'flex' }}>
    <BackgroundColor color={props.backgroundColor}>
      <div className={getClassName(props)} />
    </BackgroundColor>
  </div>
);
