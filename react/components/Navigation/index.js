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

    const handler = () => {
      const open = !this.state.open;

      const contentHeight = this.contentRef.offsetHeight;

      this.setState(state => {
        if (open) setTimeout(this.deanimate(), 200);

        return {
          ...state,
          open,
          animate: true,
          dimensions: {
            ...state.dimensions,
            height: contentHeight
          }
        };
      });
    };

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
                      onKeyDown={e => e.key === "Enter" && handler(e)}
                      onClick={handler}
                      style={{ display: "inline-block" }}
                    >
                      <Container
                        height={6}
                        width={6}
                        style={{
                          position: "relative",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        {when(this.state.open).then(
                          <Icon name="x" color="black" />,
                          <Icon name="menu" color="black" />
                        )}
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
              transition: "height 200ms linear"
            }}
          >
            <div
              ref={node => {
                this.contentRef = node;
              }}
            >
              {this.props.children}
            </div>
          </div>
        </Container>
      </BackgroundColor>
    );
  }
}

export default Navigation;
