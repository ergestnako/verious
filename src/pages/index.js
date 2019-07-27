import React from "react";
import Container from "@verious/vs-container";
import Grid from "@verious/vs-grid";
import Row from "@verious/vs-row";
import Column from "@verious/vs-column";
import Heading from "@verious/vs-heading";
import Paragraph from "@verious/vs-paragraph";
import Page from "../templates/Page";
import Hero from "../components/Hero";
import BackgroundColor from "@verious/vs-background-color";

export default () => (
  <Page>
    <Hero title="Verious" />
    <BackgroundColor color="grey-100">
      <Container padding={[16, 0, 16, 0]}>
        <Grid>
          <Row>
            <Column end={[12, 12, 12, 12, 12]}>
              <Heading size="2">Principles</Heading>
            </Column>
          </Row>
          <Row>
            <Column end={[12, 12, 4, 4, 4]}>
              <Heading size="3">Reusability</Heading>
              <Paragraph>
                React components can be shared across other components and pages
                using a simple module system.
              </Paragraph>
              <Container height={2} />
              <Heading size="3">Design Consistency</Heading>
              <Paragraph>
                Abstract measurements applied to fonts, spacing, and layout
                utilize abstract units. Color and fonts built in.
              </Paragraph>
              <Container height={2} />
              <Heading size="3">Escapable</Heading>
              <Paragraph>
                Component styles depend on the{" "}
                <a href="https://github.com/cpinnix/verious-styles">
                  Verious Styles
                </a>{" "}
                library; providing an escape hatch for those looking to use
                Verious outside React.
              </Paragraph>
              <Container height={2} />
            </Column>
          </Row>
        </Grid>
      </Container>
    </BackgroundColor>
  </Page>
);
