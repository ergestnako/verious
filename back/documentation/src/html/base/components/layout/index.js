const React = require('react');
const Page = require('../../../components/page');
const Hero = require('../../../components/hero');
const Documentation = require('../../../components/documentation/components/layout');

module.exports = () => (
  <Page>
    <Hero
      title="Image"
      subtitle="Documentation for image."
    />
    <Documentation />
  </Page>
);
