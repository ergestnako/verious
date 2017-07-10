const React = require('react');
const Page = require('../../../components/page');
const Hero = require('../../../components/hero');
const LinkDocumentation = require('../../../components/documentation/typography/link');

module.exports = () => (
  <Page>
    <Hero
      title="Links"
      subtitle="Documentation for links."
    />
    <LinkDocumentation />
  </Page>
);
