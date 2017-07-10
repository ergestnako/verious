const React = require('react');
const Image = require('../../components/image');

module.exports = ({ source, caption }) => React.createElement(
  'div',
  { className: 'vs-block-image-center' },
  React.createElement(
    'div',
    { className: 'vs-block-image-center-container' },
    React.createElement(
      'div',
      { className: 'vs-block-image-center-row' },
      React.createElement(
        'div',
        { className: 'vs-block-image-center-content' },
        React.createElement(Image, { source: source })
      )
    )
  )
);