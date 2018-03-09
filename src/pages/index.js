const React = require('react');
const Page = require('../templates/Page');
const Square = require('../../react/components/Square');
const Container = require('../../react/components/Container');
const Row = require('../../react/components/Row');
const Column = require('../../react/components/Column');
const Hero = require('../components/Hero');
const Heading = require('../../react/components/Heading');
const Paragraph = require('../../react/components/Paragraph');
const Wrapper = require('../../react/components/Wrapper');

module.exports = () => (
  <Page>
    <Hero
      title="Verious"
      subtitle="Very serious styles and components for websites and web applications."
    />
    <Wrapper padding={[8, 0, 8, 0]}>
      <Container>
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
            <Square size="2" />
          </Column>
          <Column span={[12, 12, 6, 6, 6]}>
            <Heading size="3">Reusability</Heading>
            <Paragraph>
              Components can be shared across other components and pages using a
              simple module system. This ensures a single source of truth for
              every component; increasing efficiency and allowing component
              reuse across projects.
            </Paragraph>
            <Square size="2" />
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
            <Square size="2" />
          </Column>
          <Column span={[12, 12, 6, 6, 6]}>
            <Heading size="3">CSS Underneath</Heading>
            <Paragraph>
              Component styles depend on the{' '}
              <a href="https://github.com/cpinnix/verious-styles">
                Verious Styles
              </a>{' '}
              library; providing an escape hatch for those looking to use
              Verious outside React.
            </Paragraph>
            <Square size="2" />
          </Column>
        </Row>
      </Container>
    </Wrapper>
  </Page>
);
