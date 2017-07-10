const React = require('react');

module.exports = ({ source }) => React.createElement(
  "div",
  { className: "vs-image-image", "data-script": "vsImage" },
  React.createElement("img", {
    className: "vs-image-source",
    src: source
  })
);