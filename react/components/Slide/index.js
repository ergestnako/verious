const React = require('react');

function style({ backgroundColor }) {
  return {
    width: '100%',
    height: '100%',
    backgroundColor: '' || backgroundColor
  };
}

module.exports = ({ children, backgroundColor }) => (
  <div className="vs-slide" style={style({ backgroundColor })}>
    {children}
  </div>
);
