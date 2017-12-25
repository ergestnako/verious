const React = require('react');
const Container = require('../Container');
const Row = require('../Row');
const Column = require('../Column');
const Wrapper = require('../Wrapper');
const Layout = require('../Layout');
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
                <Wrapper padding={[1, 0, 1, 0]}>
                  <Layout direction="horizontal">
                    {this.props.left}
                    <Spacer />
                    <IconButton
                      onClick={() => {
                        this.setState({
                          open: !this.state.open
                        });
                      }}
                    >
                      <IconMenu
                        iconColor={this.props.iconColor || 'vs-white'}
                        mode={this.state.open ? 'cross' : ''}
                      />
                    </IconButton>
                  </Layout>
                </Wrapper>
              </Column>
            </Row>
          </Container>
          <div
            style={{
              overflow: 'hidden',
              height: this.state.open ? height : 0,
              transition: 'height 200ms linear'
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
                  <Wrapper padding={[2, 0, 2, 0]}>
                    <Container>
                      <Row>
                        <Column span={[12, 12, 12, 12, 12]}>
                          {this.props.children}
                        </Column>
                      </Row>
                    </Container>
                  </Wrapper>
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
