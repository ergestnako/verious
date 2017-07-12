const React = require('react');
const Image = require('../../components/Image');
const Wrapper = require('../../components/Wrapper');
const Container = require('../../components/Container');
const Row = require('../../components/Row');
const Column = require('../../components/Column');

module.exports = ({ source, caption }) => React.createElement(
  Wrapper,
  { padding: [4, 0, 4, 0] },
  React.createElement(
    Container,
    null,
    React.createElement(
      Row,
      null,
      React.createElement(
        Column,
        { span: [6, 6, 6, 6], push: [0, 0, 0, 0] },
        React.createElement(Image, { source: source })
      )
    )
  )
);