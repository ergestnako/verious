const React = require('react');
const Image = require('../../components/Image');
const Wrapper = require('../../components/Wrapper');

module.exports = ({ source, caption }) => React.createElement(
  Wrapper,
  null,
  React.createElement(Image, { source: source })
);