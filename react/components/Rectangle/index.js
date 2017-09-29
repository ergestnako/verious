const React = require('react');
const BackgroundColor = require('../BackgroundColor');

function getStyles({ width, height }) {
  const styles = {
    width: width ? `${width}rem` : '',
    height: height ? `${height}rem` : ''
  };

  return styles;
}

module.exports = props => (
  <div style={{ display: 'flex' }}>
    <BackgroundColor color={props.backgroundColor}>
      <div style={getStyles(props)} />
    </BackgroundColor>
  </div>
);
