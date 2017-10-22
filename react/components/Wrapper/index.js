const React = require('react');

const edges = ['top', 'right', 'bottom', 'left'];

function getClassName({ padding, margin, pull, visibility }) {
  let classes = [];

  if (padding) {
    for (let i = 0; i < padding.length; i += 1) {
      const p = padding[i];
      if (typeof p === 'number') {
        classes = [...classes, `vs-padding-${edges[i]}-${p}`];
      } else if (Array.isArray(p)) {
        classes = [
          ...classes,
          `vs-sm-padding-${edges[i]}-${p[0]}`,
          `vs-md-padding-${edges[i]}-${p[1]}`,
          `vs-lg-padding-${edges[i]}-${p[2]}`,
          `vs-xl-padding-${edges[i]}-${p[3]}`
        ];
      }
    }
  }

  if (margin) {
    for (let i = 0; i < padding.length; i += 1) {
      const p = margin[i];
      if (typeof p === 'number') {
        classes = [...classes, `vs-margin-${edges[i]}-${p}`];
      } else if (Array.isArray(p)) {
        classes = [
          ...classes,
          `vs-sm-margin-${edges[i]}-${p[0]}`,
          `vs-md-margin-${edges[i]}-${p[1]}`,
          `vs-lg-margin-${edges[i]}-${p[2]}`,
          `vs-xl-margin-${edges[i]}-${p[3]}`
        ];
      }
    }
  }

  if (pull) {
    for (let i = 0; i < padding.length; i += 1) {
      const p = pull[i];
      if (typeof p === 'number') {
        classes = [...classes, `vs-pull-${edges[i]}-${p}`];
      } else if (Array.isArray(p)) {
        classes = [
          ...classes,
          `vs-sm-pull-${edges[i]}-${p[0]}`,
          `vs-md-pull-${edges[i]}-${p[1]}`,
          `vs-lg-pull-${edges[i]}-${p[2]}`,
          `vs-xl-pull-${edges[i]}-${p[3]}`
        ];
      }
    }
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

module.exports = ({ children, style, padding, margin, pull, visibility }) => (
  <div
    style={style}
    className={getClassName({ padding, margin, pull, visibility })}
  >
    {children}
  </div>
);
