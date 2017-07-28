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
var Button = require('../Button');
var Layout = require('../Layout');
var Spacer = require('../Spacer');

var Navigation = function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this));

    _this.state = { open: false };
    return _this;
  }

  _createClass(Navigation, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        Wrapper,
        { padding: [1, 0, 1, 0], backgroundColor: this.props.backgroundColor || 'vs-white' },
        React.createElement(
          Container,
          null,
          React.createElement(
            Row,
            null,
            React.createElement(
              Column,
              { span: [6, 12, 16, 16], push: [0, 0, 0, 0] },
              React.createElement(
                Wrapper,
                { padding: [0, 0, 0, 0] },
                React.createElement(
                  Layout,
                  { direction: 'horizontal' },
                  this.props.left,
                  React.createElement(Spacer, null),
                  React.createElement(Button, {
                    onClick: function onClick() {
                      return _this2.setState({ open: true });
                    },
                    style: { display: this.state.open ? 'none' : '' },
                    label: 'Menu',
                    textColor: this.props.textColor || 'vs-black'
                  }),
                  React.createElement(Button, {
                    onClick: function onClick() {
                      return _this2.setState({ open: false });
                    },
                    style: { display: this.state.open ? '' : 'none' },
                    label: 'Close',
                    textColor: this.props.textColor || 'vs-black'
                  })
                )
              )
            )
          )
        ),
        React.createElement(
          Wrapper,
          {
            style: { display: this.state.open ? '' : 'none' },
            backgroundColor: this.props.backgroundColor || 'vs-white',
            padding: [2, 0, 2, 0]
          },
          React.createElement(
            Container,
            null,
            React.createElement(
              Row,
              null,
              React.createElement(
                Column,
                { span: [6, 12, 16, 16], push: [0, 0, 0, 0] },
                this.props.children
              )
            )
          )
        )
      );
    }
  }]);

  return Navigation;
}(React.Component);

module.exports = Navigation;