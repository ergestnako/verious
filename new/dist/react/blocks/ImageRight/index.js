const React = require('react');
const Image = require('../../components/image');

module.exports = ({ source, caption }) => React.createElement(
  'div',
  { className: 'vs-block-image-right' },
  React.createElement(
    'div',
    { className: 'vs-block-image-right-container' },
    React.createElement(
      'div',
      { className: 'vs-block-image-right-row' },
      React.createElement(
        'div',
        { className: 'vs-block-image-right-content' },
        React.createElement(Image, { source: source })
      )
    )
  )
);