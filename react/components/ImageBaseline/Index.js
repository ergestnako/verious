/* global document, getComputedStyle */

const React = require('react');
const Measure = require('react-measure').default;

function getSpacingUnit() {
  if (typeof getComputedStyle === 'undefined') {
    return 0;
  }

  return parseFloat(getComputedStyle(document.documentElement).fontSize);
}

class ImageBaseline extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      dimensions: {
        width: -1,
        height: -1
      }
    };

    this.handleLoad = this.handleLoad.bind(this);
  }

  handleLoad() {
    this.setState(Object.assign({}, this.state, { loaded: true }));
  }

  render() {
    const { height } = this.state.dimensions;

    return (
      <Measure
        bounds
        onResize={contentRect => {
          this.setState({ dimensions: contentRect.bounds });
        }}
      >
        {({ measureRef }) => {
          const spacingUnit = getSpacingUnit();
          const newHeight = Math.floor(height / spacingUnit) * spacingUnit;

          return (
            <div className="vs-image-image" style={{ height: newHeight }}>
              <img
                src={this.props.source}
                alt={this.props.source}
                className={this.state.loaded ? 'vs-image-source' : ''}
                ref={measureRef}
                onLoad={this.handleLoad}
              />
            </div>
          );
        }}
      </Measure>
    );
  }
}

module.exports = ImageBaseline;
