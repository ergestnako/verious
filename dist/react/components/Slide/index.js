const React = require('react');

function style({ backgroundColor }) {
  return {
    width: '100%',
    height: '100%',
    backgroundColor: '' || backgroundColor
  };
}

module.exports = ({ children, backgroundColor }) => React.createElement(
  'div',
  { className: 'vs-slide', style: style({ backgroundColor }) },
  children
);