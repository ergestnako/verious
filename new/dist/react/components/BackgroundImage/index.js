const React = require('react');

function getStyle({ style, source }) {
  return Object.assign({}, style, {
    backgroundImage: `url('${source}')`
  });
}

module.exports = ({ children, style, source }) => React.createElement(
  "div",
  { className: "vs-background-image", style: getStyle({ style, source }) },
  children
);