'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var React = require('react');

function getClassName(_ref) {
  var span = _ref.span,
      push = _ref.push;

  var classes = ['vs-col-xs-' + span[0], 'vs-col-sm-' + span[1], 'vs-col-md-' + span[2], 'vs-col-lg-' + span[3], 'vs-col-xl-' + span[4]];

  if (push) {
    classes = [].concat(_toConsumableArray(classes), ['vs-col-xs-push-' + push[0], 'vs-col-sm-push-' + push[1], 'vs-col-md-push-' + push[2], 'vs-col-lg-push-' + push[3], 'vs-col-xl-push-' + push[4]]);
  }

  return classes.join(' ');
}

module.exports = function (_ref2) {
  var children = _ref2.children,
      span = _ref2.span,
      push = _ref2.push;
  return React.createElement(
    'div',
    { className: getClassName({ span: span, push: push }) },
    children
  );
};