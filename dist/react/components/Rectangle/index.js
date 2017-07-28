'use strict';

var React = require('react');

function getClassName(_ref) {
  var backgroundColor = _ref.backgroundColor;

  var classes = [];

  if (backgroundColor) {
    if (backgroundColor.includes('vs-')) {
      classes.push('vs-background-color--' + backgroundColor.slice(3));
    }
  }

  return classes.join(' ');
}

function getStyles(_ref2) {
  var width = _ref2.width,
      height = _ref2.height,
      backgroundColor = _ref2.backgroundColor;

  var styles = {
    width: width ? width + 'rem' : '',
    height: height ? height + 'rem' : ''
  };

  if (backgroundColor) {
    if (!backgroundColor.includes('vs-')) {
      styles.backgroundColor = backgroundColor;
    }
  }

  return styles;
}

module.exports = function (props) {
  return React.createElement('div', {
    style: getStyles(props),
    className: getClassName(props)
  });
};