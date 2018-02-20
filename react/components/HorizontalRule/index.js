const React = require('react');
const utilities = require('../../utilities');
const Flex = require('../Flex');
const Spacer = require('../Spacer');
const BackgroundColor = require('../BackgroundColor');

function getClassName({ height }) {
  let classes = [];

  if (height) {
    classes = [...classes, `vs-height--${height}`];
  }

  return classes.join(' ');
}

function getLineClassName({ lineColor }) {
  let classes = ['vs-horizontal-rule'];

  if (lineColor) {
    if (utilities.isInternalColor(lineColor)) {
      classes = [...classes, `vs-background-color--${lineColor.slice(3)}`];
    }
  }

  return classes.join(' ');
}

module.exports = ({ height, style, lineColor }) => (
  <div className={getClassName({ height })}>
    <Flex direction="column" style={{ height: '100%' }}>
      <Spacer />
      <BackgroundColor color={lineColor}>
        <div className={getLineClassName({ lineColor })} />
      </BackgroundColor>
      <Spacer />
    </Flex>
  </div>
);
