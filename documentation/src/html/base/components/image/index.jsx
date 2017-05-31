const React = require('react');
const Page = require('../../../components/page');
const Hero = require('../../../components/hero');
const ImageDocumentation = require('../../../components/documentation/components/image');

module.exports = () => (
  <Page>
    <Hero
      title="Image"
      subtitle="Documentation for image."
    />
    <ImageDocumentation />
  </Page>
);
