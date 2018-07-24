import React from "react";
import Container from "@verious/vs-container";
import Grid from "@verious/vs-grid";
import Row from "@verious/vs-row";
import Column from "@verious/vs-column";
import Heading from "@verious/vs-heading";
import Paragraph from "@verious/vs-paragraph";
import Page from "../templates/Page";
import Hero from "../components/Hero";

module.exports = () => (
  <Page>
    <Hero
      title="Verious"
      subtitle="Very serious styles and components for websites and web applications."
    />
    <Container padding={[8, 0, 8, 0]}>
      <Grid>
        <Row>
          <Column span={[12, 12, 12, 12, 12]}>
            <Heading size="2">Principles</Heading>
          </Column>
        </Row>
        <Row>
          <Column span={[12, 12, 6, 6, 6]}>
            <Heading size="3">Component Based Design</Heading>
            <Paragraph>
              HTML, CSS, and javascript is encapsulated into individual React
              components allowing designers to build complex layouts in one file
              using JSX--an easy to learn HTML-like syntax.
            </Paragraph>
            <Container height={2} />
          </Column>
          <Column span={[12, 12, 6, 6, 6]}>
            <Heading size="3">Reusability</Heading>
            <Paragraph>
              Components can be shared across other components and pages using a
              simple module system. This ensures a single source of truth for
              every component; increasing efficiency and allowing component
              reuse across projects.
            </Paragraph>
            <Container height={2} />
          </Column>
        </Row>
        <Row>
          <Column span={[12, 12, 6, 6, 6]}>
            <Heading size="3">Abstract Measurements</Heading>
            <Paragraph>
              Measurements applied to fonts, spacing, and layout utilize
              abstract units; the base being 1rem. Instead of referring to
              pixels, designers refer to units.
            </Paragraph>
            <Container height={2} />
          </Column>
          <Column span={[12, 12, 6, 6, 6]}>
            <Heading size="3">CSS Underneath</Heading>
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
