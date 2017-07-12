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
            <Heading size="2">Core Principles</Heading>
          </Column>
        </Row>
        <Row>
          <Column span={[6, 6, 8, 8]} push={[0, 0, 0, 0]}>
            <Heading size="3">Opt-in styles.</Heading>
            <Paragraph>All styles and mixins are name-spaced so designers can use what they want and drop what they do not.</Paragraph>
            <Square size="2" />
          </Column>
          <Column span={[6, 6, 8, 8]} push={[0, 0, 0, 0]}>
            <Heading size="3">Responsive layout.</Heading>
            <Paragraph>Grid layout for phone, tablet, desktop, and large desktop.</Paragraph>
            <Square size="2" />
          </Column>
        </Row>
        <Row>
          <Column span={[6, 6, 8, 8]} push={[0, 0, 0, 0]}>
            <Heading size="3">Baseline grid.</Heading>
            <Paragraph>All elements are aligned to the same vertical grid and a modular scale is used to ensure proper scale across all viewports.</Paragraph>
            <Square size="2" />
          </Column>
          <Column span={[6, 6, 8, 8]} push={[0, 0, 0, 0]}>
            <Heading size="3">Component based design.</Heading>
            <Paragraph>Components encapsulate HTML, CSS, and javascript code into easy to use packages. Designers can use components to build webpages without getting into the weeds.</Paragraph>
            <Square size="2" />
          </Column>
        </Row>
        <Row>
          <Column span={[6, 6, 8, 8]} push={[0, 0, 0, 0]}>
            <Heading size="3">Reusability.</Heading>
            <Paragraph>Complex components can be isolated into a single file and included throughout a codebase.</Paragraph>
            <Square size="2" />
          </Column>
          <Column span={[6, 6, 8, 8]} push={[0, 0, 0, 0]}>
            <Heading size="3">Abstract Measurements.</Heading>
            <Paragraph>The horizontal responsive grid and vertical baseline grid provide a set of abstract measurements to simplify design discussions and ensure responsiveness.</Paragraph>
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
        <Row>
          <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
            <Heading size="2">Usage</Heading>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  </Page>
);
