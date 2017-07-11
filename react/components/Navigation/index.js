import React from 'react';
import Container from '../Container';
import Row from '../Row';
import Column from '../Column';
import Wrapper from '../Wrapper';
import Button from '../Button';
import Layout from '../Layout';
import Spacer from '../Spacer';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  render() {
    return (
      <Wrapper backgroundColor="vs-pink-700">
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
                    textColor="vs-white"
                  />
                  <Button
                    onClick={() => this.setState({ open: false })}
                    style={{ display: this.state.open ? '' : 'none' }}
                    label="Close"
                    textColor="vs-white"
                  />
                </Layout>
              </Wrapper>
            </Column>
          </Row>
        </Container>
        <Wrapper
          style={{ display: this.state.open ? '' : 'none' }}
          backgroundColor="vs-pink-700"
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

export default Counter;
