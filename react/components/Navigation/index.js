const React = require('react');
const Container = require('../Container');
const Row = require('../Row');
const Column = require('../Column');
const Wrapper = require('../Wrapper');
const Button = require('../Button');
const Layout = require('../Layout');
const Spacer = require('../Spacer');

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  render() {
    return (
      <Wrapper padding={[1, 0, 1, 0]} backgroundColor={this.props.backgroundColor || 'vs-white'}>
        <Container>
          <Row>
            <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
              <Wrapper padding={[0, 0, 0, 0]}>
                <Layout direction="horizontal">
                  <Spacer />
                  <Button
                    onClick={() => this.setState({ open: true })}
                    style={{ display: this.state.open ? 'none' : '' }}
                    label="Menu"
                    textColor={this.props.textColor || 'vs-black'}
                  />
                  <Button
                    onClick={() => this.setState({ open: false })}
                    style={{ display: this.state.open ? '' : 'none' }}
                    label="Close"
                    textColor={this.props.textColor || 'vs-black'}
                  />
                </Layout>
              </Wrapper>
            </Column>
          </Row>
        </Container>
        <Wrapper
          style={{ display: this.state.open ? '' : 'none' }}
          backgroundColor={this.props.backgroundColor || 'vs-white'}
          padding={[2, 0, 2, 0]}
        >
          <Container>
            <Row>
              <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
                { this.props.children }
              </Column>
            </Row>
          </Container>
        </Wrapper>
      </Wrapper>
    );
  }
}

module.exports = Navigation;
