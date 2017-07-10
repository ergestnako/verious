const React = require('react');
const Page = require('../../../components/page');
const Hero = require('../../../components/hero');
const Documentation = require('../../../components/documentation/typography/blockquote');

module.exports = () => (
  <Page>
    <Hero
      title="Blockquote"
      subtitle="Documentation for blockquote."
    />
    <Documentation />
  </Page>
);
