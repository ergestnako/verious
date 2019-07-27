import React from "react";
import Container from "@verious/vs-container";
import Grid from "@verious/vs-grid";
import Row from "@verious/vs-row";
import Column from "@verious/vs-column";
import Text from "@verious/vs-text";
import BackgroundColor from "@verious/vs-background-color";

export default () => (
  <BackgroundColor color="vs-white">
    <Container padding={[8, 0, 8, 0]}>
      <Grid>
        <Row>
          <Column span={[12, 12, 12, 12, 12]}>
            <Text textColor="vs-black">
              This site is generated with{" "}
              <a href="https://www.gatsbyjs.org/">Gatsby</a> and built with love
              in Brooklyn, NY.
            </Text>
          </Column>
        </Row>
      </Grid>
    </Container>
  </BackgroundColor>
);
