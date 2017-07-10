const React = require('react');
const Page = require('../../../components/page');
const Hero = require('../../../components/hero');
const HeadingDocumentation = require('../../../components/documentation/typography/heading');

module.exports = () => (
  <Page>
    <Hero
      title="Headings"
      subtitle="Documentation for headings."
    />
    <HeadingDocumentation />
  </Page>
);
