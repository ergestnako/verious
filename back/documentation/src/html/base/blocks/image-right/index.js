const React = require('react');
const Page = require('../../../components/page');
const Hero = require('../../../components/hero');
const Documentation = require('../../../components/documentation/blocks/image-right');

module.exports = () => (
  <Page>
    <Hero
      title="Image Right"
      subtitle="Documentation for right image block."
    />
    <Documentation />
  </Page>
);
