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
      <div>
        <Container>
          <Row>
            <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
              <Wrapper padding={[2, 0, 2, 0]}>
                <Layout direction="horizontal">
                  <Spacer />
                  <Button
                    onClick={() => this.setState({ open: true })}
                    style={{ display: this.state.open ? 'none' : '' }}
                    label="Menu"
                  />
                  <Button
                    onClick={() => this.setState({ open: false })}
                    style={{ display: this.state.open ? '' : 'none' }}
                    label="Close"
                  />
                </Layout>
              </Wrapper>
            </Column>
          </Row>
        </Container>
        <div style={{ display: this.state.open ? '' : 'none' }}>
          <Container>
            <Row>
              <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
                <Wrapper padding={[2, 0, 2, 0]}>
                  { this.props.children }
                </Wrapper>
              </Column>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Counter;
