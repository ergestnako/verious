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

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  render() {
    return (
      <BackgroundColor color={this.props.backgroundColor || 'vs-white'}>
        <Wrapper padding={[1, 0, 1, 0]}>
          <Container>
            <Row>
              <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
                <Wrapper padding={[0, 0, 0, 0]}>
                  <Layout direction="horizontal">
                    {this.props.left}
                    <Spacer />
                    <IconButton
                      onClick={() => this.setState({ open: !this.state.open })}
                    >
                      <IconMenu
                        iconColor="vs-white"
                        mode={this.state.open ? 'cross' : ''}
                      />
                    </IconButton>
                  </Layout>
                </Wrapper>
              </Column>
            </Row>
          </Container>
          <div style={{ display: this.state.open ? '' : 'none' }}>
            <Wrapper padding={[2, 0, 2, 0]}>
              <Container>
                <Row>
                  <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
                    {this.props.children}
                  </Column>
                </Row>
              </Container>
            </Wrapper>
          </div>
        </Wrapper>
      </BackgroundColor>
    );
  }
}

module.exports = Navigation;
