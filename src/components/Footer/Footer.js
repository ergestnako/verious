import React from "react";
import Container from "@verious/vs-container";
import Grid from "@verious/vs-grid";
import Row from "@verious/vs-row";
import Column from "@verious/vs-column";
import Paragraph from "@verious/vs-paragraph";
import BackgroundColor from "@verious/vs-background-color";
import HorizontalRule from "../../../react/components/HorizontalRule";
import Utilities from "../../../react/utilities";
import Logo from "../Logo";

export default () => (
  <BackgroundColor color="vs-white">
    <HorizontalRule lineColor="vs-grey-300" height={4} />
    <Container padding={[4, 0, 4, 0]}>
      <Grid>
        <Row>
          <Column span={[12, 12, 12, 12, 12]}>
            <Logo
              size={4}
              circleColor={Utilities.getInternalColor("vs-cyan-a400")}
              overlayColor={Utilities.getInternalColor("vs-black")}
            />
            <Container height={4} />
            <Paragraph textColor="vs-black">
              This site is generated with{" "}
              <a href="https://www.gatsbyjs.org/">Gatsby</a> and built with love
              in Washington, DC.
            </Paragraph>
          </Column>
        </Row>
      </Grid>
    </Container>
  </BackgroundColor>
);
