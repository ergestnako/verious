const React = require('react');
const Page = require('../../../components/page');
const Hero = require('../../../components/hero');
const CodeDocumentation = require('../../../components/documentation/typography/code');

module.exports = () => (
  <Page>
    <Hero
      title="Code"
      subtitle="Documentation for code."
    />
    <CodeDocumentation />
  </Page>
);
