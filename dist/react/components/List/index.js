const React = require('react');

function getClassName({ unstyled }) {
  let classes = ['vs-ul'];

  if (unstyled) {
    classes = [...classes, 'vs-ul--unstyled'];
  }

  return classes.join(' ');
}

module.exports = ({ children, unstyled }) => React.createElement(
  'ul',
  {
    className: getClassName({ unstyled })
  },
  children
);