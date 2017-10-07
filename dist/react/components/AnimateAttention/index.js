'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

function getClassName(_ref, _ref2) {
  var type = _ref.type;
  var shouldNudge = _ref2.shouldNudge;

  return shouldNudge ? 'animated ' + type : '';
}

var AnimateAttention = function (_React$Component) {
  _inherits(AnimateAttention, _React$Component);

  function AnimateAttention() {
    _classCallCheck(this, AnimateAttention);

    var _this = _possibleConstructorReturn(this, (AnimateAttention.__proto__ || Object.getPrototypeOf(AnimateAttention)).call(this));

    _this.state = {
      shouldNudge: false
    };

    _this.handleEnter = _this.handleEnter.bind(_this);
    return _this;
  }

  _createClass(AnimateAttention, [{
    key: 'handleEnter',
    value: function handleEnter() {
      var _this2 = this;

      this.setState(Object.assign({}, this.state, { shouldNudge: true }));

      setTimeout(function () {
        _this2.setState(Object.assign({}, _this2.state, { shouldNudge: false }));
      }, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        {
          className: getClassName(this.props, this.state),
          onMouseEnter: this.handleEnter
        },
        this.props.children
      );
    }
  }]);

  return AnimateAttention;
}(React.Component);

module.exports = AnimateAttention;