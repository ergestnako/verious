'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var Container = require('../Container');
var Row = require('../Row');
var Column = require('../Column');
var Wrapper = require('../Wrapper');
var Layout = require('../Layout');
var Spacer = require('../Spacer');
var BackgroundColor = require('../BackgroundColor');
var IconButton = require('../IconButton');
var IconMenu = require('../IconMenu');
var Measure = require('react-measure').default;

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


      return React.createElement(
        BackgroundColor,
        { color: this.props.backgroundColor || 'vs-white' },
        React.createElement(
          Wrapper,
          null,
          React.createElement(
            Container,
            null,
            React.createElement(
              Row,
              null,
              React.createElement(
                Column,
                { span: [12, 12, 12, 12, 12] },
                React.createElement(
                  Wrapper,
                  { padding: [1, 0, 1, 0] },
                  React.createElement(
                    Layout,
                    { direction: 'horizontal' },
                    this.props.left,
                    React.createElement(Spacer, null),
                    React.createElement(
                      IconButton,
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
                      React.createElement(IconMenu, {
                        iconColor: this.props.iconColor || 'vs-white',
                        mode: this.state.open ? 'cross' : ''
                      })
                    )
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            {
              style: {
                overflow: 'hidden',
                height: this.state.open ? height : 0,
                transition: this.state.animate ? 'height 200ms linear' : ''
              }
            },
            React.createElement(
              Measure,
              {
                bounds: true,
                onResize: function onResize(contentRect) {
                  _this2.setState({ dimensions: contentRect.bounds });
                }
              },
              function (_ref) {
                var measureRef = _ref.measureRef;
                return React.createElement(
                  'div',
                  { ref: measureRef },
                  React.createElement(
                    Wrapper,
                    { padding: [2, 0, 2, 0] },
                    React.createElement(
                      Container,
                      null,
                      React.createElement(
                        Row,
                        null,
                        React.createElement(
                          Column,
                          { span: [12, 12, 12, 12, 12] },
                          _this2.props.children
                        )
                      )
                    )
                  )
                );
              }
            )
          )
        )
      );
    }
  }]);

  return Navigation;
}(React.Component);

module.exports = Navigation;