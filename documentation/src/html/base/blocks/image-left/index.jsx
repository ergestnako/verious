const React = require('react');
const Page = require('../../../components/page');
const Hero = require('../../../components/hero');
const Documentation = require('../../../components/documentation/blocks/image-left');

module.exports = () => (
  <Page>
    <Hero
      title="Image Left"
      subtitle="Documentation for left image block."
    />
    <Documentation />
  </Page>
);
