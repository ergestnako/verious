'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var Wrapper = require('../Wrapper');
var ImageBaseline = require('../ImageBaseline');

var Image = function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: 'render',
    value: function render() {
      var element = React.createElement('div', null);

      if (Array.isArray(this.props.source)) {
        element = React.createElement(
          Wrapper,
          null,
          React.createElement(
            Wrapper,
            { visibility: [true, false, false, false] },
            React.createElement(ImageBaseline, { source: this.props.source[0] })
          ),
          React.createElement(
            Wrapper,
            { visibility: [false, true, false, false] },
            React.createElement(ImageBaseline, { source: this.props.source[1] })
          ),
          React.createElement(
            Wrapper,
            { visibility: [false, false, true, false] },
            React.createElement(ImageBaseline, { source: this.props.source[2] })
          ),
          React.createElement(
            Wrapper,
            { visibility: [false, false, false, true] },
            React.createElement(ImageBaseline, { source: this.props.source[3] })
          )
        );
      } else {
        element = React.createElement(ImageBaseline, { source: this.props.source });
      }

      return element;
    }
  }]);

  return Image;
}(React.Component);

module.exports = Image;