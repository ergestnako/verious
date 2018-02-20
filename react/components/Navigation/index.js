const React = require('react');
const Container = require('../Container');
const Row = require('../Row');
const Column = require('../Column');
const Wrapper = require('../Wrapper');
const Flex = require('../Flex');
const Spacer = require('../Spacer');
const BackgroundColor = require('../BackgroundColor');
const IconButton = require('../IconButton');
const IconMenu = require('../IconMenu');
const Measure = require('react-measure').default;

class Navigation extends React.Component {
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
      <BackgroundColor color={this.props.backgroundColor || 'vs-white'}>
        <Wrapper>
          <Container>
            <Row>
              <Column span={[12, 12, 12, 12, 12]}>
                <Wrapper padding={[2, 0, 2, 0]}>
                  <Flex>
                    {this.props.left}
                    <Spacer />
                    <IconButton
                      onClick={() => {
                        const open = !this.state.open;

                        const newState = {
                          open,
                          animate: true
                        };

                        this.setState(newState);

                        if (open) {
                          setTimeout(
                            () => this.setState({ animate: false }),
                            200
                          );
                        }
                      }}
                    >
                      <IconMenu
                        iconColor={this.props.iconColor || 'vs-white'}
                        mode={this.state.open ? 'cross' : ''}
                      />
                    </IconButton>
                  </Flex>
                </Wrapper>
              </Column>
            </Row>
          </Container>
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
                <div ref={measureRef}>
                  {this.props.children}
                </div>
              )}
            </Measure>
          </div>
        </Wrapper>
      </BackgroundColor>
    );
  }
}

module.exports = Navigation;
