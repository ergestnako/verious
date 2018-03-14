import React from 'react';
import Measure from 'react-measure';
import { Container } from 'verious-react/components/Container/Container';
import { Grid } from 'verious-react/components/Grid/Grid';
import { Row } from 'verious-react/components/Row/Row';
import { Column } from 'verious-react/components/Column/Column';
import Flex from '../Flex';
import Spacer from '../Spacer';
import BackgroundColor from '../BackgroundColor';
import IconButton from '../IconButton';
import IconMenu from '../IconMenu';

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
        <Container>
          <Grid>
            <Row>
              <Column span={[12, 12, 12, 12, 12]}>
                <Container padding={[2, 0, 2, 0]}>
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
                </Container>
              </Column>
            </Row>
          </Grid>
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
        </Container>
      </BackgroundColor>
    );
  }
}

module.exports = Navigation;
