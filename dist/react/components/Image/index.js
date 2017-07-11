/* global document, getComputedStyle */

const React = require('react');
const Measure = require('react-measure').default;

function getSpacingUnit() {
  if (typeof getComputedStyle === 'undefined') {
    return 0;
  }

  return parseFloat(getComputedStyle(document.documentElement).fontSize);
}

class Image extends React.Component {
  constructor() {
    super();
    this.state = {
      dimensions: {
        width: -1,
        height: -1
      }
    };
  }

  render() {
    const { height } = this.state.dimensions;

    return React.createElement(
      Measure,
      {
        bounds: true,
        onResize: contentRect => {
          this.setState({ dimensions: contentRect.bounds });
        }
      },
      ({ measureRef }) => {
        const spacingUnit = getSpacingUnit();
        const newHeight = Math.floor(height / spacingUnit) * spacingUnit;

        console.log(spacingUnit, height, newHeight);

        return React.createElement(
          'div',
          { className: 'vs-image-image', style: { height: newHeight } },
          React.createElement('img', { src: this.props.source, className: 'vs-image-source', ref: measureRef })
        );
      }
    );
  }
}

module.exports = Image;