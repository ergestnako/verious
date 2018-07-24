/* global window */

import React from "react";
import Container from "@verious/vs-container";
import BackgroundColor from "@verious/vs-background-color";
import Paragraph from "@verious/vs-paragraph";
import c from "color";
import Shadow from "../../../react/components/Shadow";

class ColorCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rgb: "",
      hex: ""
    };
  }

  componentDidMount() {
    if (typeof window.getComputedStyle !== "undefined") {
      const backgroundColor = window
        .getComputedStyle(this.colorElement.children[0])
        .getPropertyValue("background-color");
      const color = c(backgroundColor);

      const newState = {
        rgb: backgroundColor,
        hex: color.hex()
      };

      this.setState(Object.assign({}, newState)); // eslint-disable-line
    }
  }

  render() {
    return (
      <Shadow depth={1}>
        <Container>
          <div
            ref={element => {
              this.colorElement = element;
            }}>
            <BackgroundColor color={this.props.color}>
              <Container height={2} />
            </BackgroundColor>
            <Container padding={[2, 2, 1, 2]}>
              <Paragraph>{this.props.color}</Paragraph>
              <Paragraph>{this.state.rgb}</Paragraph>
              <Paragraph>{this.state.hex}</Paragraph>
            </Container>
          </div>
        </Container>
      </Shadow>
    );
  }
}

module.exports = ColorCard;
