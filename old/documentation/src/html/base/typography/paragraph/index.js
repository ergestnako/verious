const React = require('react');
const Page = require('../../../components/page');
const Hero = require('../../../components/hero');
const ParagraphDocumentation = require('../../../components/documentation/typography/paragraph');

module.exports = () => (
  <Page>
    <Hero
      title="Paragraphs"
      subtitle="Documentation for paragraphs."
    />
    <ParagraphDocumentation />
  </Page>
);
