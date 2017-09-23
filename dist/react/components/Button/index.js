'use strict';

var React = require('react');
var BackgroundColor = require('../BackgroundColor');
var Wrapper = require('../Wrapper');
var Text = require('../Text');

module.exports = function (_ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      backgroundColor = _ref.backgroundColor,
      textColor = _ref.textColor;
  return React.createElement(
    'div',
    { role: 'button', tabIndex: 0, onClick: onClick, style: { display: 'inline-block' } },
    React.createElement(
      BackgroundColor,
      { color: backgroundColor },
      React.createElement(
        Wrapper,
        { padding: [1, 1, 0, 1] },
        React.createElement(
          Text,
          {
            size: 0,
            font: 'helvetica',
            color: textColor
          },
          label
        )
      )
    )
  );
};