const React = require('react');
const Page = require('../templates/Page');
const Square = require('../../react/components/Square');
const Container = require('../../react/components/Container');
const Row = require('../../react/components/Row');
const Column = require('../../react/components/Column');
const Code = require('../../react/components/Code');
const Heading = require('../../react/components/Heading');
const Paragraph = require('../../react/components/Paragraph');
const Image = require('../../react/components/Image');
const Wrapper = require('../../react/components/Wrapper');
const Logo = require('../img/vs-logo.png');

module.exports = () => (
  <Page>
    <Wrapper backgroundColor="vs-pink-500" padding={[12, 0, 12, 0]}>
      <Container>
        <Row>
          <Column span={[4, 4, 6, 6]} push={[1, 4, 5, 5]}>
            <Image source={Logo} />
            <Square size="1" />
            <Paragraph textColor="vs-white" style={{ textAlign: 'center' }}>Very serious styles.</Paragraph>
          </Column>
        </Row>
      </Container>
    </Wrapper>
    <Wrapper padding={[8, 0, 8, 0]}>
      <Container>
        <Row>
          <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
            <Heading size="2">Mission</Heading>
            <Paragraph>To provide a set of easy to use <a href="https://facebook.github.io/react/">React</a> components for designing static websites with <a href="https://www.gatsbyjs.org/">Gatsby</a>.</Paragraph>
          </Column>
        </Row>
        <Row>
          <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
            <Heading size="2">Principles</Heading>
          </Column>
        </Row>
        <Row>
          <Column span={[6, 6, 8, 8]} push={[0, 0, 0, 0]}>
            <Heading size="3">Static Deployment</Heading>
            <Paragraph>Gatsby is used to produce a static website that can be deployed to whole range of services. Verious is simply a component library built for Gatsby and React applications. Check out Gatsby for more information.</Paragraph>
            <Square size="2" />
          </Column>
          <Column span={[6, 6, 8, 8]} push={[0, 0, 0, 0]}>
            <Heading size="3">Component Based Design</Heading>
            <Paragraph>Component HTML, CSS, and javascript code is isolated in a single React component. This abstraction allows designers to build complex layouts in single files using an easy to learn HTML-like syntax.</Paragraph>
            <Square size="2" />
          </Column>
        </Row>
        <Row>
          <Column span={[6, 6, 8, 8]} push={[0, 0, 0, 0]}>
            <Heading size="3">Reusability</Heading>
            <Paragraph>Components can be shared across other components and pages using a simple module system. This ensures a single source of truth for every component which increases efficiency and even allows components to be reused across projects.</Paragraph>
            <Square size="2" />
          </Column>
          <Column span={[6, 6, 8, 8]} push={[0, 0, 0, 0]}>
            <Heading size="3">Vertical Rhythm</Heading>
            <Paragraph>A website should have a regular repeated rhythm built on top of a common baseline to reduce friction and improve familiarity. The baseline grid is responsive to viewport width breaking with the responsive grid.</Paragraph>
            <Square size="2" />
          </Column>
        </Row>
        <Row>
          <Column span={[6, 6, 8, 8]} push={[0, 0, 0, 0]}>
            <Heading size="3">Abstract Measurements</Heading>
            <Paragraph>The responsive and baseline grids provide a set of abstract measurements in design. Designers are encouraged to avoid exact pixels values and instead adopt units that scale across devices.</Paragraph>
            <Square size="2" />
          </Column>
          <Column span={[6, 6, 8, 8]} push={[0, 0, 0, 0]}>
            <Heading size="3">CSS Underneath</Heading>
            <Paragraph>Under the hood, styles are written in SASS, namespaced by component, and compiled to CSS. This provides an easy escape hatch for translating components to vanilla CSS and HTML code.</Paragraph>
            <Square size="2" />
          </Column>
        </Row>
        <Row>
          <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
            <Heading size="2">Installation</Heading>
            <Code>
              {`
  npm install verious
              `}
            </Code>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  </Page>
);
