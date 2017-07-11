/* global document, getComputedStyle */

const React = require('react');
const Measure = require('react-measure').default;

function getSpacingUnit() {
  return parseFloat(getComputedStyle(document.documentElement).fontSize);
}

class Image extends React.Component {
  constructor() {
    super();
    this.state = {
      dimensions: {
        width: -1,
        height: -1,
      },
    };
  }

  render() {
    const { height } = this.state.dimensions;

    return (
      <Measure
        bounds
        onResize={(contentRect) => {
          this.setState({ dimensions: contentRect.bounds });
        }}
      >
        {({ measureRef }) => {
          const spacingUnit = getSpacingUnit();
          const newHeight = Math.floor(height / spacingUnit) * spacingUnit;

          return (
            <div className="vs-image-image" style={{ height: newHeight }}>
              <img src={this.props.source} className="vs-image-source" ref={measureRef} />
            </div>
          );
        }}
      </Measure>

    );
  }
}

module.exports = Image;
