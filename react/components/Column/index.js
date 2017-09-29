const React = require('react');

function getClassName({ span, push }) {
  const classes = [
    `vs-col-sm-${span[0]}`,
    `vs-col-sm-push-${push[0]}`,
    `vs-col-md-${span[1]}`,
    `vs-col-md-push-${push[1]}`,
    `vs-col-lg-${span[2]}`,
    `vs-col-lg-push-${push[2]}`,
    `vs-col-xl-${span[3]}`,
    `vs-col-xl-push-${push[3]}`
  ];

  return classes.join(' ');
}

module.exports = ({ children, span, push }) => (
  <div className={getClassName({ span, push })}>{children}</div>
);
