const React = require('react');
const Page = require('../components/page');
const Hero = require('../components/hero');
const Heading = require('../components/heading');
const Paragraph = require('../components/paragraph');

module.exports = () => (
  <Page>
    <Hero
      title="Verious"
      subtitle="Very serious styles."
    />
    <Heading />
    <Paragraph />
  </Page>
);
