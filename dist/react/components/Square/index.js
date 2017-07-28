'use strict';

var React = require('react');
var utilities = require('../../utilities');

function getClassName(_ref) {
  var backgroundColor = _ref.backgroundColor;

  var classes = [];

  if (backgroundColor) {
    if (utilities.isInternalColor(backgroundColor)) {
      classes.push('vs-background-color--' + backgroundColor.slice(3));
    }
  }

  return classes.join(' ');
}

function getStyles(_ref2) {
  var size = _ref2.size,
      style = _ref2.style,
      backgroundColor = _ref2.backgroundColor;

  var styles = {
    width: size + 'rem',
    height: size + 'rem'
  };

  if (backgroundColor) {
    if (!utilities.isInternalColor(backgroundColor)) {
      styles.backgroundColor = backgroundColor;
    }
  }

  return Object.assign({}, style, styles);
}

module.exports = function (props) {
  return React.createElement('div', {
    style: getStyles(props),
    className: getClassName(props)
  });
};