const React = require('react');
const Image = require('../../components/Image');
const Container = require('../../components/Container');
const Row = require('../../components/Row');
const Column = require('../../components/Column');

module.exports = ({ source, caption }) => React.createElement(
  Container,
  null,
  React.createElement(
    Row,
    null,
    React.createElement(
      Column,
      { span: [6, 12, 16, 16], push: [0, 0, 0, 0] },
      React.createElement(Image, { source: source })
    )
  )
);