const React = require('react');
const Page = require('../../../components/blankPage');
const Presentation = require('../../../../../../src/react/components/presentation');
const Slide = require('../../../../../../src/react/components/slide');
const Layout = require('../../../../../../src/react/components/layout');
const Square = require('../../../../../../src/react/components/square');
const Spacer = require('../../../../../../src/react/components/spacer');

module.exports = () => (
  <Page>
    <Presentation>
      <Slide backgroundColor="red" />
      <Slide backgroundColor="blue" >
        <Layout direction="vertical" style={{ height: '100%' }}>
          <Spacer />
          <Layout direction="horizontal">
            <Spacer />
            <Square size="4" color="magenta" />
            <Spacer />
          </Layout>
          <Spacer />
        </Layout>
      </Slide>
      <Slide backgroundColor="green" />
      <Slide backgroundColor="purple" />
    </Presentation>
  </Page>
);