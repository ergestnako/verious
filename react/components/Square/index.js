const React = require('react');
const Rectangle = require('../Rectangle');

module.exports = props => (
  <Rectangle
    width={props.size}
    height={props.size}
    backgroundColor={props.backgroundColor}
  />
);
