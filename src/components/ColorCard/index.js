/* global window */

const React = require('react');
const { Container } = require('verious-react/components/Container/Container');
const BackgroundColor = require('../../../react/components/BackgroundColor');
const Square = require('../../../react/components/Square');
const { Paragraph } = require('verious-react/components/Paragraph/Paragraph');
const Shadow = require('../../../react/components/Shadow');
const c = require('color');

class ColorCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rgb: '',
      hex: ''
    };
  }

  componentDidMount() {
    if (typeof window.getComputedStyle !== 'undefined') {
      const backgroundColor = window
        .getComputedStyle(this.colorElement.children[0])
        .getPropertyValue('background-color');
      const color = c(backgroundColor);

      const newState = {
        rgb: backgroundColor,
        hex: color.hex()
      };

      this.setState(Object.assign({}, newState)); // eslint-disable-line
    }
  }

  render() {
    return (
      <Shadow depth={1}>
        <Container>
          <div
            ref={element => {
              this.colorElement = element;
            }}
          >
            <BackgroundColor color={this.props.color}>
              <Square size={8} />
            </BackgroundColor>
            <Container padding={[2, 2, 1, 2]}>
              <Paragraph>{this.props.color}</Paragraph>
              <Paragraph>{this.state.rgb}</Paragraph>
              <Paragraph>{this.state.hex}</Paragraph>
            </Container>
          </div>
        </Container>
      </Shadow>
    );
  }
}

module.exports = ColorCard;
