'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BackgroundColor = require('verious-react/components/BackgroundColor/BackgroundColor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (_ref) {
  var children = _ref.children,
      backgroundColor = _ref.backgroundColor;
  return _react2.default.createElement(
    _BackgroundColor.BackgroundColor,
    { color: backgroundColor, style: { display: 'table' } },
    _react2.default.createElement(
      'div',
      { className: 'vs-icon' },
      children
    )
  );
};