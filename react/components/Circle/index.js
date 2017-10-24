const React = require('react');
const BackgroundColor = require('../BackgroundColor');

function getClassName({ size }) {
  let classes = ['vs-circle'];

  if (size) {
    classes = [...classes, `vs-circle--${size}`];
  }

  return classes.join(' ');
}

module.exports = props => (
  <div style={props.style} className={getClassName(props)}>
    <BackgroundColor
      color={props.backgroundColor}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    />
    {props.children && props.children}
  </div>
);
