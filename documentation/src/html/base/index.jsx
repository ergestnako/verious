const React = require('react');
const Page = require('../components/page');
const LayoutLeftPanel = require('../components/layout-left-panel');
const Hero = require('../components/hero');
const Heading = require('../components/documentation/typography/heading');
const Paragraph = require('../components/documentation/typography/paragraph');
const Link = require('../components/documentation/typography/link');
const List = require('../components/documentation/typography/list');
const Code = require('../components/documentation/typography/code');

module.exports = () => (
  <Page>
    <LayoutLeftPanel
      panel={
        <div>Sidebar</div>
      }
      content={
        <div style={{ position: 'relative' }}>
          <Hero
            title="Verious"
            subtitle="Very serious styles."
          />
          <Heading />
          <Paragraph />
          <Link />
          <List />
          <Code />
        </div>
      }
    />
  </Page>
);
