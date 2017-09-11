const React = require('react');
const Page = require('../../../templates/Page');
const Hero = require('../../../components/Hero');
const HorizontalRuleDocumentation = require('../../../components/documentation/components/HorizontalRuleDocumentation');

module.exports = () =>
  (<Page>
    <Hero title="Horizontal Rule" subtitle="Documentation for horizontal rule." />
    <HorizontalRuleDocumentation />
  </Page>);
