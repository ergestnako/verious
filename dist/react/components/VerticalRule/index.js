'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BackgroundColor = require('verious-react/components/BackgroundColor/BackgroundColor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function getClassName(_ref) {
  var height = _ref.height;

  var classes = ['vs-vertical-rule'];

  if (height) {
    classes = [].concat(_toConsumableArray(classes), ['vs-vertical-rule-' + height]);
  }

  return classes.join(' ');
}

module.exports = function (_ref2) {
  var height = _ref2.height,
      style = _ref2.style,
      lineColor = _ref2.lineColor;
  return _react2.default.createElement(
    _BackgroundColor.BackgroundColor,
    { color: lineColor, style: { display: 'table' } },
    _react2.default.createElement('div', { className: getClassName({ height: height }) })
  );
};