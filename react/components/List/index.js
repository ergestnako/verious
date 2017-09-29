const React = require('react');

function getClassName({ unstyled }) {
  let classes = ['vs-ul'];

  if (unstyled) {
    classes = [...classes, 'vs-ul--unstyled'];
  }

  return classes.join(' ');
}

module.exports = ({ children, unstyled }) => (
  <ul className={getClassName({ unstyled })}>{children}</ul>
);
