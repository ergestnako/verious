const React = require('react');
const Page = require('../../../components/page');
const Hero = require('../../../components/hero');
const Documentation = require('../../../components/documentation/blocks/image-full-width');

module.exports = () => (
  <Page>
    <Hero
      title="Image Full Width"
      subtitle="Documentation for full width image block."
    />
    <Documentation />
  </Page>
);
