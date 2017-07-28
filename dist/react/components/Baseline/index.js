'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global window */

var React = require('react');

var Baseline = function (_React$Component) {
  _inherits(Baseline, _React$Component);

  function Baseline() {
    _classCallCheck(this, Baseline);

    var _this = _possibleConstructorReturn(this, (Baseline.__proto__ || Object.getPrototypeOf(Baseline)).call(this));

    _this.state = { visible: false };

    if (typeof window !== 'undefined') {
      window.showBaseline = function () {
        _this.setState({ visible: true });
      };
    }
    return _this;
  }

  _createClass(Baseline, [{
    key: 'getClassName',
    value: function getClassName() {
      var classes = ['vs-baseline'];

      if (this.state.visible) {
        classes = [].concat(_toConsumableArray(classes), ['vs-baseline--active']);
      }

      return classes.join(' ');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement('div', { className: this.getClassName(), onClick: function onClick() {
          return _this2.setState({ visible: false });
        } });
    }
  }]);

  return Baseline;
}(React.Component);

module.exports = Baseline;