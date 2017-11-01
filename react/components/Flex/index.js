const React = require('react');

function getClassnames({ direction, justifyContent, alignItems, wrap }) {
  let classNames = [];

  if (direction) {

  }

  if (justifyContent) {

  }

  if (alignItems) {

  }

  if (wrap) {

  }

  return classNames.join(' ');
}

module.exports = (props) => (
  <div classNames={getClassnames(props)}>{children}</div>
);
