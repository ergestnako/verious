const React = require('react');

function getClassName({ padding, visibility, pull }) {
  let classes = [];

  if (padding) {
    classes = [
      ...classes,
      `vs-padding-top-${padding[0]}`,
      `vs-padding-right-${padding[1]}`,
      `vs-padding-bottom-${padding[2]}`,
      `vs-padding-left-${padding[3]}`
    ];
  }

  if (pull) {
    classes = [
      ...classes,
      `vs-pull-top-${pull[0]}`,
      `vs-pull-right-${pull[1]}`,
      `vs-pull-bottom-${pull[2]}`,
      `vs-pull-left-${pull[3]}`
    ];
  }

  if (visibility) {
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

module.exports = ({ children, style, padding, visibility, pull }) => (
  <div style={style} className={getClassName({ padding, visibility, pull })}>
    {children}
  </div>
);
