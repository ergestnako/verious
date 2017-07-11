const React = require('react');
const Page = require('../../../templates/Page');
const Hero = require('../../../components/Hero');
const ParagraphDocumentation = require('../../../components/documentation/typography/paragraph');

module.exports = () => (
  <Page>
    <Hero
      title="Paragraph"
      subtitle="Documentation for paragraphs."
    />
    <ParagraphDocumentation />
  </Page>
);
