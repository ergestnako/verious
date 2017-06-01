const React = require('react');

function getClassName({ span }) {
  const classes = [
    `vs-col-sm-${span[0]}`,
    `vs-col-md-${span[1]}`,
    `vs-col-lg-${span[2]}`,
    `vs-col-xl-${span[3]}`,
  ];

  return classes.join(' ');
}

module.exports = ({ children, span }) => (
  <div className={getClassName({ span })}>
    { children }
  </div>
);
