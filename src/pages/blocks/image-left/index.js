const React = require('react');
const Page = require('../../../templates/Page');
const Hero = require('../../../components/Hero');
const ImageLeftDocumentation = require('../../../components/documentation/blocks/image-left');

module.exports = () => (
  <Page>
    <Hero
      title="ImageLeft"
      subtitle="Documentation for left image block."
    />
    <ImageLeftDocumentation />
  </Page>
);
