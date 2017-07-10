const React = require('react');
const Page = require('../../../components/page');
const Hero = require('../../../components/hero');
const ListDocumentation = require('../../../components/documentation/typography/list');

module.exports = () => (
  <Page>
    <Hero
      title="Lists"
      subtitle="Documentation for lists."
    />
    <ListDocumentation />
  </Page>
);
