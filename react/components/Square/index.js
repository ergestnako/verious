const React = require('react');
const BackgroundColor = require('../BackgroundColor');

function getStyles({ size, style }) {
  const styles = {
    width: `${size}rem`,
    height: `${size}rem`,
  };

  return Object.assign({}, style, styles);
}

module.exports = props => (
  <div style={{ display: 'inline-block' }}>
    <BackgroundColor color={props.backgroundColor}>
      <div
        style={getStyles(props)}
      />
    </BackgroundColor>
  </div>
);
