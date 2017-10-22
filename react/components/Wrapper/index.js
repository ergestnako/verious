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
          `vs-padding-sm-${edges[i]}-${p[0]}`,
          `vs-padding-md-${edges[i]}-${p[1]}`,
          `vs-padding-lg-${edges[i]}-${p[2]}`,
          `vs-padding-xl-${edges[i]}-${p[3]}`
        ];
      }
    }
  }

  if (margin) {
    for (let i = 0; i < margin.length; i += 1) {
      const p = margin[i];
      if (typeof p === 'number') {
        classes = [...classes, `vs-margin-${edges[i]}-${p}`];
      } else if (Array.isArray(p)) {
        classes = [
          ...classes,
          `vs-margin-sm-${edges[i]}-${p[0]}`,
          `vs-margin-md-${edges[i]}-${p[1]}`,
          `vs-margin-lg-${edges[i]}-${p[2]}`,
          `vs-margin-xl-${edges[i]}-${p[3]}`
        ];
      }
    }
  }

  if (pull) {
    for (let i = 0; i < pull.length; i += 1) {
      const p = pull[i];
      if (typeof p === 'number') {
        classes = [...classes, `vs-pull-${edges[i]}-${p}`];
      } else if (Array.isArray(p)) {
        classes = [
          ...classes,
          `vs-pull-sm-${edges[i]}-${p[0]}`,
          `vs-pull-md-${edges[i]}-${p[1]}`,
          `vs-pull-lg-${edges[i]}-${p[2]}`,
          `vs-pull-xl-${edges[i]}-${p[3]}`
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
