const React = require('react');

function getClassnames({ flex, direction, justifyContent, alignItems, wrap }) {
  let classNames = [];

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

  if (flex) {
    if (Array.isArray(flex)) {
      const flexClassnames = flex.map(
        (f, i) => (f ? `vs-${sizes[i]}-flex` : '')
      );

      classNames = [...classNames, ...flexClassnames];
    } else {
      classNames = [...classNames, 'vs-flex'];
    }
  }

  if (direction) {
    if (Array.isArray(direction)) {
      classNames = [
        ...classNames,
        `vs-xs-flex-direction-${direction[0]}`,
        `vs-sm-flex-direction-${direction[1]}`,
        `vs-md-flex-direction-${direction[2]}`,
        `vs-lg-flex-direction-${direction[3]}`,
        `vs-xl-flex-direction-${direction[4]}`
      ];
    } else {
      classNames = [...classNames, `vs-flex-direction-${direction}`];
    }
  }

  if (justifyContent) {
    if (Array.isArray(justifyContent)) {
      classNames = [
        ...classNames,
        `vs-xs-flex-justify-content-${justifyContent[0]}`,
        `vs-sm-flex-justify-content-${justifyContent[1]}`,
        `vs-md-flex-justify-content-${justifyContent[2]}`,
        `vs-lg-flex-justify-content-${justifyContent[3]}`,
        `vs-xl-flex-justify-content-${justifyContent[4]}`
      ];
    } else {
      classNames = [...classNames, `vs-flex-justify-content-${justifyContent}`];
    }
  }

  if (alignItems) {
    if (Array.isArray(alignItems)) {
      classNames = [
        ...classNames,
        `vs-xs-flex-justify-align-items-${alignItems[0]}`,
        `vs-sm-flex-justify-align-items-${alignItems[1]}`,
        `vs-md-flex-justify-align-items-${alignItems[2]}`,
        `vs-lg-flex-justify-align-items-${alignItems[3]}`,
        `vs-xl-flex-justify-align-items-${alignItems[4]}`
      ];
    } else {
      classNames = [...classNames, `vs-flex-align-items-${alignItems}`];
    }
  }

  if (wrap) {
  }

  console.log(classNames.join(' '));

  return classNames.join(' ');
}

const Flex = props => (
  <div className={getClassnames(props)} style={props.style}>{props.children}</div>
);

Flex.defaultProps = {
  flex: true,
  direction: "row"
};

module.exports = Flex;
