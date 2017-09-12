const React = require('react');
const _ = require('lodash');

const fonts = ['montserrat'];

function getClassName({ size, font }) {
  let className = '';

  if (_.findIndex(fonts, font)) {
    className = `vs-type-${font}--${size}`;
  }

  return className;
}

module.exports = ({ size, font }) =>
  <div className={getClassName({ size, font })}>Hello World</div>;
