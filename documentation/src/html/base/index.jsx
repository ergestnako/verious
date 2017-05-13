const React = require('react');
const Page = require('../components/page');
const LayoutLeftPanel = require('../components/layout-left-panel');
const Hero = require('../components/hero');
const HeadingDocumentation = require('../components/documentation/typography/heading');
const ParagraphDocumentation = require('../components/documentation/typography/paragraph');
const LinkDocumentation = require('../components/documentation/typography/link');
const ListDocumentation = require('../components/documentation/typography/list');
const CodeDocumentation = require('../components/documentation/typography/code');
const LayoutLeftPanelDocumentation = require('../components/documentation/components/layout-left-panel');

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
          <HeadingDocumentation />
          <ParagraphDocumentation />
          <LinkDocumentation />
          <ListDocumentation />
          <CodeDocumentation />
          <LayoutLeftPanelDocumentation />
        </div>
      }
    />
  </Page>
);
