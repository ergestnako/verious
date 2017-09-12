'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global document, getComputedStyle */

var React = require('react');
var Measure = require('react-measure').default;

function getSpacingUnit() {
  if (typeof getComputedStyle === 'undefined') {
    return 0;
  }

  return parseFloat(getComputedStyle(document.documentElement).fontSize);
}

var Image = function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image() {
    _classCallCheck(this, Image);

    var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this));

    _this.state = {
      loaded: false,
      dimensions: {
        width: -1,
        height: -1
      }
    };

    _this.handleLoad = _this.handleLoad.bind(_this);
    return _this;
  }

  _createClass(Image, [{
    key: 'handleLoad',
    value: function handleLoad() {
      this.setState(Object.assign({}, this.state, { loaded: true }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var height = this.state.dimensions.height;


      return React.createElement(
        Measure,
        {
          bounds: true,
          onResize: function onResize(contentRect) {
            _this2.setState({ dimensions: contentRect.bounds });
          }
        },
        function (_ref) {
          var measureRef = _ref.measureRef;

          var spacingUnit = getSpacingUnit();
          var newHeight = Math.floor(height / spacingUnit) * spacingUnit;

          return React.createElement(
            'div',
            { className: 'vs-image-image', style: { height: newHeight } },
            React.createElement('img', {
              src: _this2.props.source,
              alt: _this2.props.source,
              className: 'vs-image-source',
              ref: measureRef,
              onLoad: _this2.handleLoad
            })
          );
        }
      );
    }
  }]);

  return Image;
}(React.Component);

module.exports = Image;