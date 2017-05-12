const React = require('react');
const Page = require('../components/page');
const Hero = require('../components/hero');
const Heading = require('../components/heading');
const Paragraph = require('../components/paragraph');
const Link = require('../components/link');
const List = require('../components/list');
const Code = require('../components/code');

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
