'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function getClassName(_ref) {
  var base = _ref.base,
      mode = _ref.mode,
      iconColor = _ref.iconColor;

  var classes = [base];

  classes = [].concat(_toConsumableArray(classes), ['vs-background-color-' + iconColor]);

  if (mode) {
    classes = [].concat(_toConsumableArray(classes), [base + '-' + mode]);
  }

  return classes.join(' ');
}

module.exports = function (_ref2) {
  var backgroundColor = _ref2.backgroundColor,
      iconColor = _ref2.iconColor,
      mode = _ref2.mode;
  return _react2.default.createElement(
    _Icon2.default,
    { backgroundColor: backgroundColor },
    _react2.default.createElement('div', {
      className: getClassName({ base: 'vs-icon-menu-top', mode: mode, iconColor: iconColor }),
      style: { position: 'relative' }
    }),
    _react2.default.createElement('div', {
      className: getClassName({ base: 'vs-icon-menu-bottom', mode: mode, iconColor: iconColor }),
      style: { position: 'relative' }
    })
  );
};