const React = require('react');
const Page = require('../../../components/page');
const Hero = require('../../../components/hero');
const PresentationDocumentation = require('../../../components/documentation/components/presentation');

module.exports = () => (
  <Page>
    <Hero
      title="Presentation"
      subtitle="Documentation for presentation."
    />
    <PresentationDocumentation />
  </Page>
);
