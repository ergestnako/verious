const React = require('react');
const Page = require('../../../templates/Page');
const Hero = require('../../../components/Hero');
const ImageFullWidthDocumentation = require('../../../components/documentation/blocks/image-full-width');

module.exports = () => (
  <Page>
    <Hero
      title="ImageFullWidth"
      subtitle="Documentation for full width image block."
    />
    <ImageFullWidthDocumentation />
  </Page>
);
