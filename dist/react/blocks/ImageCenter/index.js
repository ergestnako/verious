'use strict';

var React = require('react');
var Image = require('../../components/Image');
var Wrapper = require('../../components/Wrapper');
var Container = require('../../components/Container');
var Row = require('../../components/Row');
var Column = require('../../components/Column');

module.exports = function (_ref) {
  var source = _ref.source,
      caption = _ref.caption;
  return React.createElement(
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
          { span: [6, 12, 16, 16], push: [0, 0, 0, 0] },
          React.createElement(Image, { source: source })
        )
      )
    )
  );
};