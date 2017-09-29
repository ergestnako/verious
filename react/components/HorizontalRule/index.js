const React = require('react');
const utilities = require('../../utilities');
const Layout = require('../Layout');
const Spacer = require('../Spacer');
const BackgroundColor = require('../BackgroundColor');

function getClassName({ height }) {
  let classes = ['vs-horizontal-rule'];

  if (height) {
    classes = [...classes, `vs-horizontal-rule--${height}`];
  }

  return classes.join(' ');
}

function getLineClassName({ lineColor }) {
  let classes = ['vs-horizontal-rule-line'];

  if (lineColor) {
    if (utilities.isInternalColor(lineColor)) {
      classes = [...classes, `vs-background-color--${lineColor.slice(3)}`];
    }
  }

  return classes.join(' ');
}

module.exports = ({ height, style, backgroundColor, lineColor }) => (
  <BackgroundColor color={backgroundColor}>
    <div className={getClassName({ height })}>
      <Layout direction="vertical" style={{ height: '100%' }}>
        <Spacer />
        <BackgroundColor color={lineColor}>
          <div className={getLineClassName({ lineColor })} />
        </BackgroundColor>
        <Spacer />
      </Layout>
    </div>
  </BackgroundColor>
);
