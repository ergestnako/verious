'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var React = require('react');

function getClassnames(_ref) {
  var flex = _ref.flex,
      direction = _ref.direction,
      justifyContent = _ref.justifyContent,
      alignItems = _ref.alignItems,
      wrap = _ref.wrap;

  var classNames = [];

  var sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

  if (flex) {
    if (Array.isArray(flex)) {
      var flexClassnames = flex.map(function (f, i) {
        return f ? 'vs-' + sizes[i] + '-flex' : '';
      });

      classNames = [].concat(_toConsumableArray(classNames), _toConsumableArray(flexClassnames));
    } else {
      classNames = [].concat(_toConsumableArray(classNames), ['vs-flex']);
    }
  }

  if (direction) {
    if (Array.isArray(direction)) {
      classNames = [].concat(_toConsumableArray(classNames), ['vs-xs-flex-direction-' + direction[0], 'vs-sm-flex-direction-' + direction[1], 'vs-md-flex-direction-' + direction[2], 'vs-lg-flex-direction-' + direction[3], 'vs-xl-flex-direction-' + direction[4]]);
    } else {
      classNames = [].concat(_toConsumableArray(classNames), ['vs-flex-direction-' + direction]);
    }
  }

  if (justifyContent) {
    if (Array.isArray(justifyContent)) {
      classNames = [].concat(_toConsumableArray(classNames), ['vs-xs-flex-justify-content-' + justifyContent[0], 'vs-sm-flex-justify-content-' + justifyContent[1], 'vs-md-flex-justify-content-' + justifyContent[2], 'vs-lg-flex-justify-content-' + justifyContent[3], 'vs-xl-flex-justify-content-' + justifyContent[4]]);
    } else {
      classNames = [].concat(_toConsumableArray(classNames), ['vs-flex-justify-content-' + justifyContent]);
    }
  }

  if (alignItems) {
    if (Array.isArray(alignItems)) {
      classNames = [].concat(_toConsumableArray(classNames), ['vs-xs-flex-justify-align-items-' + alignItems[0], 'vs-sm-flex-justify-align-items-' + alignItems[1], 'vs-md-flex-justify-align-items-' + alignItems[2], 'vs-lg-flex-justify-align-items-' + alignItems[3], 'vs-xl-flex-justify-align-items-' + alignItems[4]]);
    } else {
      classNames = [].concat(_toConsumableArray(classNames), ['vs-flex-align-items-' + alignItems]);
    }
  }

  if (wrap) {}

  console.log(classNames.join(' '));

  return classNames.join(' ');
}

var Flex = function Flex(props) {
  return React.createElement(
    'div',
    { className: getClassnames(props), style: props.style },
    props.children
  );
};

Flex.defaultProps = {
  flex: true,
  direction: "row"
};

module.exports = Flex;