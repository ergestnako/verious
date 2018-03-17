'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMeasure = require('react-measure');

var _reactMeasure2 = _interopRequireDefault(_reactMeasure);

var _Container = require('verious-react/components/Container/Container');

var _Grid = require('verious-react/components/Grid/Grid');

var _Row = require('verious-react/components/Row/Row');

var _Column = require('verious-react/components/Column/Column');

var _Flex = require('../Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _Spacer = require('../Spacer');

var _Spacer2 = _interopRequireDefault(_Spacer);

var _BackgroundColor = require('../BackgroundColor');

var _BackgroundColor2 = _interopRequireDefault(_BackgroundColor);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _IconMenu = require('../IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this));

    _this.state = {
      open: false,
      animate: false,
      dimensions: {
        width: -1,
        height: -1
      }
    };
    return _this;
  }

  _createClass(Navigation, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var height = this.state.dimensions.height;


      return _react2.default.createElement(
        _BackgroundColor2.default,
        { color: this.props.backgroundColor || 'vs-white' },
        _react2.default.createElement(
          _Container.Container,
          null,
          _react2.default.createElement(
            _Grid.Grid,
            null,
            _react2.default.createElement(
              _Row.Row,
              null,
              _react2.default.createElement(
                _Column.Column,
                { span: [12, 12, 12, 12, 12] },
                _react2.default.createElement(
                  _Container.Container,
                  { padding: [2, 0, 2, 0] },
                  _react2.default.createElement(
                    _Flex2.default,
                    null,
                    this.props.left,
                    _react2.default.createElement(_Spacer2.default, null),
                    _react2.default.createElement(
                      _IconButton2.default,
                      {
                        onClick: function onClick() {
                          var open = !_this2.state.open;

                          var newState = {
                            open: open,
                            animate: true
                          };

                          _this2.setState(newState);

                          if (open) {
                            setTimeout(function () {
                              return _this2.setState({ animate: false });
                            }, 200);
                          }
                        }
                      },
                      _react2.default.createElement(_IconMenu2.default, {
                        iconColor: this.props.iconColor || 'vs-white',
                        mode: this.state.open ? 'cross' : ''
                      })
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            {
              style: {
                overflow: 'hidden',
                height: this.state.open ? height : 0,
                transition: this.state.animate ? 'height 200ms linear' : ''
              }
            },
            _react2.default.createElement(
              _reactMeasure2.default,
              {
                bounds: true,
                onResize: function onResize(contentRect) {
                  _this2.setState({ dimensions: contentRect.bounds });
                }
              },
              function (_ref) {
                var measureRef = _ref.measureRef;
                return _react2.default.createElement(
                  'div',
                  { ref: measureRef },
                  _this2.props.children
                );
              }
            )
          )
        )
      );
    }
  }]);

  return Navigation;
}(_react2.default.Component);

module.exports = Navigation;