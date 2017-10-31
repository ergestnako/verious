const React = require('react');

function getClassName({ span, push }) {
  let classes = [
    `vs-col-xs-${span[0]}`,
    `vs-col-sm-${span[1]}`,
    `vs-col-md-${span[2]}`,
    `vs-col-lg-${span[3]}`,
    `vs-col-xl-${span[4]}`
  ];

  if (push) {
    classes = [
      ...classes,
      `vs-col-xs-push-${push[0]}`,
      `vs-col-sm-push-${push[1]}`,
      `vs-col-md-push-${push[2]}`,
      `vs-col-lg-push-${push[3]}`,
      `vs-col-xl-push-${push[4]}`
    ];
  }

  return classes.join(' ');
}

module.exports = ({ children, span, push }) => (
  <div className={getClassName({ span, push })}>{children}</div>
);
