'use strict';

var React = require('react');

function getClassName() {
  var classes = ['vs-ol'];
  return classes.join(' ');
}

module.exports = function (_ref) {
  var children = _ref.children;
  return React.createElement(
    'ol',
    { className: getClassName() },
    children
  );
};