const React = require('react');
const Page = require('../../../components/page');
const Hero = require('../../../components/hero');
const ImageCenterDocumentation = require('../../../components/documentation/components/image-center');

module.exports = () => (
  <Page>
    <Hero
      title="Image Center"
      subtitle="Documentation for center image component."
    />
    <ImageCenterDocumentation />
  </Page>
);
