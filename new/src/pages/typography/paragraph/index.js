const React = require('react');
const Hero = require('../../../components/Hero');
const ParagraphDocumentation = require('../../../components/documentation/typography/paragraph');

module.exports = () => (
  <div>
    <Hero
      title="Paragraph"
      subtitle="Documentation for paragraphs."
    />
    <ParagraphDocumentation />
  </div>
);
