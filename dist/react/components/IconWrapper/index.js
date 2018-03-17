'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('verious-react/components/Container/Container');

var _Flex = require('verious-react/components/Flex/Flex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (_ref) {
  var children = _ref.children,
      backgroundColor = _ref.backgroundColor;
  return _react2.default.createElement(
    _Container.Container,
    { height: 6, width: 6, style: { position: 'relative' } },
    _react2.default.createElement(
      _Flex.Flex,
      {
        justifyContent: 'center',
        alignItems: 'center',
        style: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }
      },
      children
    )
  );
};