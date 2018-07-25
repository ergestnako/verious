import React from "react";
import Measure from "react-measure";
import Container from "@verious/vs-container";
import Grid from "@verious/vs-grid";
import Row from "@verious/vs-row";
import Column from "@verious/vs-column";
import BackgroundColor from "@verious/vs-background-color";
import Flex from "@verious/vs-flex";
import Spacer from "@verious/vs-spacer";
import IconButton from "../IconButton";
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
                      }}>
                      {when(this.state.open).then(
                        <Icon name="x" color="blue-500" />,
                        <Icon name="menu" color="blue-500" />
                      )}
                    </IconButton>
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
            <Measure
              bounds
              onResize={contentRect => {
                this.setState({ dimensions: contentRect.bounds });
              }}>
              {({ measureRef }) => (
                <div ref={measureRef}>{this.props.children}</div>
              )}
            </Measure>
          </div>
        </Container>
      </BackgroundColor>
    );
  }
}

module.exports = Navigation;
