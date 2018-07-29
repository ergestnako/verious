import React from "react";
import Container from "@verious/vs-container";
import Grid from "@verious/vs-grid";
import Row from "@verious/vs-row";
import Column from "@verious/vs-column";
import BackgroundColor from "@verious/vs-background-color";
import Flex from "@verious/vs-flex";
import Spacer from "@verious/vs-spacer";
import Icon from "@verious/vs-icon";

const when = bool => ({
  then: (a, b) => (bool ? a : b)
});

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

  deanimate() {
    this.setState(state => Object.assign({}, state, { animate: false }));
  }

  render() {
    const { height } = this.state.dimensions;

    return (
      <BackgroundColor color={this.props.backgroundColor || "vs-white"}>
        <Container>
          <Grid>
            <Row>
              <Column span={[12, 12, 12, 12, 12]}>
                <Container padding={[2, 0, 2, 0]}>
                  <Flex>
                    {this.props.left}
                    <Spacer />
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        const open = !this.state.open;

                        const contentHeight = this.contentRef.offsetHeight;

                        this.setState(state => {
                          if (open) setTimeout(this.deanimate(), 200);

                          return Object.assign({}, state, {
                            open,
                            animate: true,
                            dimensions: Object.assign({}, state.dimensions, {
                              height: contentHeight
                            })
                          });
                        });
                      }}
                      style={{ display: "inline-block" }}>
                      <Container
                        height={6}
                        width={6}
                        style={{ position: "relative" }}>
                        <Flex
                          justifyContent="center"
                          alignItems="center"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                          }}>
                          {when(this.state.open).then(
                            <Icon name="x" color="blue-500" />,
                            <Icon name="menu" color="blue-500" />
                          )}
                        </Flex>
                      </Container>
                    </div>
                  </Flex>
                </Container>
              </Column>
            </Row>
          </Grid>
          <div
            style={{
              overflow: "hidden",
              height: this.state.open ? height : 0,
              transition: this.state.animate ? "height 200ms linear" : ""
            }}>
            <div
              ref={node => {
                this.contentRef = node;
              }}>
              {this.props.children}
            </div>
          </div>
        </Container>
      </BackgroundColor>
    );
  }
}

export default Navigation;
