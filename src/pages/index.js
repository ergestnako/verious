import React from "react";
import Container from "@verious/vs-container";
import Grid from "@verious/vs-grid";
import Row from "@verious/vs-row";
import Column from "@verious/vs-column";
import Heading from "@verious/vs-heading";
import Text from "@verious/vs-text";
import Paragraph from "@verious/vs-paragraph";
import Page from "../templates/Page";

export default () => (
  <Page>
    <Container padding={[32, 0, 32, 0]}>
      <Grid>
        <Row>
          <Column span={[12, 12, 6, 6, 6]}>
            <Heading size={1}>
              <Text size={8} weight={7} color="grey-400">
                Verious
              </Text>
              <br />
              <Text size={8} weight={7}>
                Principles
              </Text>
            </Heading>
            <Container height={4} />
            <Text>
              <a
                href="https://github.com/cpinnix/verious-styles"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS Styles
              </a>
            </Text>
            <br />
            <Text>
              <a
                href="https://github.com/cpinnix/verious-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Components
              </a>
            </Text>
          </Column>
          <Column span={[12, 12, 6, 6, 6]}>
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
  </Page>
);
