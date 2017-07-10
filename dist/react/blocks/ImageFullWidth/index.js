const React = require('react');
const Image = require('../../components/image');

module.exports = ({ source, caption }) => React.createElement(
  'div',
  { className: 'vs-block-image-full-width' },
  React.createElement(Image, { source: source })
);