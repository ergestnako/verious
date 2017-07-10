const React = require('react');
const Image = require('../../components/image');

module.exports = ({ source, caption }) => React.createElement(
  'div',
  { className: 'vs-block-image-left' },
  React.createElement(
    'div',
    { className: 'vs-block-image-left-container' },
    React.createElement(
      'div',
      { className: 'vs-block-image-left-row' },
      React.createElement(
        'div',
        { className: 'vs-block-image-left-content' },
        React.createElement(Image, { source: source })
      )
    )
  )
);