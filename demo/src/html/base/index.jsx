const React = require('react');
const Page = require('../components/page');
const Hero = require('../components/hero');
const Heading = require('../components/typography/heading');
const Paragraph = require('../components/typography/paragraph');
const Link = require('../components/typography/link');
const List = require('../components/typography/list');
const Code = require('../components/typography/code');

module.exports = () => (
  <Page>
    <Hero
      title="Verious"
      subtitle="Very serious styles."
    />
    <Heading />
    <Paragraph />
    <Link />
    <List />
    <Code />
  </Page>
);
