const React = require('react');
const Page = require('../../../components/page');
const Hero = require('../../../components/hero');
const LayoutLeftPanelDocumentation = require('../../../components/documentation/components/layout-left-panel');

module.exports = () => (
  <Page>
    <Hero
      title="Layout Left Panel"
      subtitle="Documentation for layout left panel."
    />
    <LayoutLeftPanelDocumentation />
  </Page>
);
