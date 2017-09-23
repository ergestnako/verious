'use strict';

var React = require('react');
var BackgroundColor = require('../BackgroundColor');

function getStyles(_ref) {
  var width = _ref.width,
      height = _ref.height;

  var styles = {
    width: width ? width + 'rem' : '',
    height: height ? height + 'rem' : ''
  };

  return styles;
}

module.exports = function (props) {
  return React.createElement(
    'div',
    { style: { display: 'flex' } },
    React.createElement(
      BackgroundColor,
      { color: props.backgroundColor },
      React.createElement('div', { style: getStyles(props) })
    )
  );
};