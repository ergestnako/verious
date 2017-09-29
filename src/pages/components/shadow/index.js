const React = require('react');
const Page = require('../../../templates/Page');
const Hero = require('../../../components/Hero');
const ShadowDocumentation = require('../../../components/documentation/components/ShadowDocumentation');

module.exports = () => (
  <Page>
    <Hero title="Shadow" subtitle="Documentation for shadow." />
    <ShadowDocumentation />
  </Page>
);
