const React = require('react');
const Page = require('../components/page');
const Hero = require('../components/hero');
const Square = require('../../../../src/react/components/square');
const Container = require('../../../../src/react/components/container');
const Row = require('../../../../src/react/components/row');
const Column = require('../../../../src/react/components/column');
const Code = require('../../../../src/react/components/code');

module.exports = () => (
  <Page>
    <Hero
      title="Verious"
      subtitle="Very serious styles."
    />
    <Square size="10" />
    <Container>
      <Row>
        <Column span={[6, 12, 16, 16]}>
          <h2 className="vs-h2">Installation</h2>
        </Column>
      </Row>
      <Square size="2" />
      <Code>
        {`
npm install verious
        `}
      </Code>
    </Container>
    <Square size="10" />
    <Container>
      <Row>
        <Column span={[6, 12, 16, 16]}>
          <h2 className="vs-h2">Core Principles</h2>
        </Column>
      </Row>
      <Square size="2" />
      <Row>
        <Column span={[6, 6, 8, 8]}>
          <div className="verious">
            <h3>Opt-in styles.</h3>
            <p>All styles and mixins are name-spaced so designers can use what they want and drop what they don't.</p>
          </div>
          <Square size="2" />
        </Column>
        <Column span={[6, 6, 8, 8]}>
          <div className="verious">
            <h3>Responsive layout.</h3>
            <p>Grid layout for phone, tablet, desktop, and large desktop.</p>
          </div>
          <Square size="2" />
        </Column>
      </Row>
      <Row>
        <Column span={[6, 6, 8, 8]}>
          <div className="verious">
            <h3>Baseline grid.</h3>
            <p>All elements are aligned to the same vertical grid and a modular scale is used to ensure proper scale across all viewports.</p>
          </div>
          <Square size="2" />
        </Column>
        <Column span={[6, 6, 8, 8]}>
          <div className="verious">
            <h3>Component based design.</h3>
            <p>Components encapsulate HTML, CSS, and javascript code into easy to use packages. Designers can use components to build webpages without getting into the weeds.</p>
          </div>
          <Square size="2" />
        </Column>
      </Row>
      <Row>
        <Column span={[6, 6, 8, 8]}>
          <div className="verious">
            <h3>Reusability.</h3>
            <p>Complex components can be isolated into a single file and included throughout a codebase.</p>
          </div>
          <Square size="2" />
        </Column>
        <Column span={[6, 6, 8, 8]}>
          <div className="verious">
            <h3>Abstract Measurements.</h3>
            <p>The horizontal responsive grid and vertical baseline grid provide a set of abstract measurements to simplify design discussions and ensure responsiveness.</p>
          </div>
          <Square size="2" />
        </Column>
      </Row>
    </Container>
    <Square size="10" />
  </Page>
);