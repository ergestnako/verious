const React = require('react');
const Page = require('../../../templates/Page');
const Hero = require('../../../components/Hero');
const ImageRightDocumentation = require('../../../components/documentation/blocks/image-right');

module.exports = () => (
  <Page>
    <Hero
      title="ImageRight"
      subtitle="Documentation for right image block."
    />
    <ImageRightDocumentation />
  </Page>
);
