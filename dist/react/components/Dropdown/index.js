'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var Measure = require('react-measure').default;

var Dropdown = function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown() {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this));

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

  _createClass(Dropdown, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var height = this.state.dimensions.height;


      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
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
            },
            role: 'button',
            style: { cursor: 'pointer' }
          },
          this.props.button
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
                _this2.props.children
              );
            }
          )
        )
      );
    }
  }]);

  return Dropdown;
}(React.Component);

module.exports = Dropdown;