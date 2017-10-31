const React = require('react');
const BackgroundColor = require('../BackgroundColor');

function getClassName({ width, height }) {
  let classes = ['vs-rectangle'];

  if (width) {
    if (Array.isArray(width)) {
      classes = [
        ...classes,
        `vs-width--xs-${width[0]}`,
        `vs-width--sm-${width[1]}`,
        `vs-width--md-${width[2]}`,
        `vs-width--lg-${width[3]}`,
        `vs-width--xl-${width[4]}`
      ];
    } else {
      classes = [...classes, `vs-width--${width}`];
    }
  }

  if (height) {
    if (Array.isArray(height)) {
      classes = [
        ...classes,
        `vs-height--sm-${height[0]}`,
        `vs-height--sm-${height[1]}`,
        `vs-height--md-${height[2]}`,
        `vs-height--lg-${height[3]}`,
        `vs-height--xl-${height[4]}`
      ];
    } else {
      classes = [...classes, `vs-height--${height}`];
    }
  }

  return classes.join(' ');
}

module.exports = props => (
  <div className={getClassName(props)}>
    <BackgroundColor
      color={props.backgroundColor}
      style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {props.children && props.children}
    </BackgroundColor>
  </div>
);
