const React = require('react');
const Page = require('../../../templates/Page');
const Hero = require('../../../components/Hero');
const ImageCenterDocumentation = require('../../../components/documentation/blocks/image-center');

module.exports = () => (
  <Page>
    <Hero
      title="Image Center"
      subtitle="Documentation for center image block."
    />
    <ImageCenterDocumentation />
  </Page>
);
