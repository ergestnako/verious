const React = require('react');
const BackgroundColor = require('../BackgroundColor');

function getStyle({ style }) {
  const newStyle = {
    display: 'flex',
    overflow: 'hidden'
  };

  return Object.assign({}, style, newStyle);
}

function getClassName({ size }) {
  let classes = [];

  if (size) {
    classes = [...classes, `vs-circle--${size}`];
  }

  return classes.join(' ');
}

module.exports = props => (
  <div style={getStyle(props)} className={getClassName(props)}>
    <BackgroundColor
      color={props.backgroundColor}
      style={{ height: '100%', width: '100%' }}
    />
  </div>
);
