'use strict';

var React = require('react');
var Image = require('../../components/Image');
var Wrapper = require('../../components/Wrapper');

module.exports = function (_ref) {
  var source = _ref.source,
      caption = _ref.caption;
  return React.createElement(
    Wrapper,
    null,
    React.createElement(Image, { source: source })
  );
};