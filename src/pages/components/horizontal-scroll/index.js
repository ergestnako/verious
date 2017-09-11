const React = require('react');
const Page = require('../../../templates/Page');
const Hero = require('../../../components/Hero');
const HorizontalScrollDocumentation = require('../../../components/documentation/components/HorizontalScrollDocumentation');

module.exports = () =>
  (<Page>
    <Hero title="Horizontal Scroll" subtitle="Documentation for horizontal scroll." />
    <HorizontalScrollDocumentation />
  </Page>);
