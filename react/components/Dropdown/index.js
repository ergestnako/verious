const React = require('react');
const Measure = require('react-measure').default;

class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      animate: false,
      dimensions: {
        width: -1,
        height: -1
      }
    };
  }

  render() {
    const { height } = this.state.dimensions;

    return (
      <div>
        <div
          onClick={() => {
            const open = !this.state.open;

            const newState = {
              open,
              animate: true
            };

            this.setState(newState);

            if (open) {
              setTimeout(() => this.setState({ animate: false }), 200);
            }
          }}
          role="button"
          style={{ cursor: 'pointer' }}
        >
          {this.props.button}
        </div>
        <div
          style={{
            overflow: 'hidden',
            height: this.state.open ? height : 0,
            transition: this.state.animate ? 'height 200ms linear' : ''
          }}
        >
          <Measure
            bounds
            onResize={contentRect => {
              this.setState({ dimensions: contentRect.bounds });
            }}
          >
            {({ measureRef }) => (
              <div ref={measureRef}>{this.props.children}</div>
            )}
          </Measure>
        </div>
      </div>
    );
  }
}

module.exports = Dropdown;
