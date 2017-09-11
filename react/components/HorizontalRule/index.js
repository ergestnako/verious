const React = require('react');
const utilities = require('../../utilities');
const Layout = require('../Layout');
const Spacer = require('../Spacer');

function getClassName({ backgroundColor, height }) {
  let classes = ['vs-horizontal-rule'];

  if (backgroundColor) {
    if (utilities.isInternalColor(backgroundColor)) {
      classes = [...classes, `vs-background-color--${backgroundColor.slice(3)}`];
    }
  }

  if (height) {
    classes = [...classes, `vs-horizontal-rule--${height}`];
  }

  return classes.join(' ');
}

function getStyle({ style, backgroundColor }) {
  const styles = {};

  if (backgroundColor) {
    if (!utilities.isInternalColor(backgroundColor)) {
      styles.backgroundColor = backgroundColor;
    }
  }

  return Object.assign({}, style, styles);
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

function getLineStyle({ style, lineColor }) {
  const styles = {};

  if (lineColor) {
    if (!utilities.isInternalColor(lineColor)) {
      styles.backgroundColor = lineColor;
    }
  }

  return Object.assign({}, style, styles);
}

module.exports = ({ height, style, backgroundColor, lineColor }) =>
  (<div
    className={getClassName({ backgroundColor, height })}
    style={getStyle({ style, backgroundColor })}
  >
    <Layout direction="vertical" style={{ height: '100%' }}>
      <Spacer />
      <div className={getLineClassName({ lineColor })} style={getLineStyle({ style, lineColor })} />
      <Spacer />
    </Layout>
  </div>);
