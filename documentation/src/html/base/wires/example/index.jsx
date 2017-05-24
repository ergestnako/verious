const React = require('react');
const Page = require('../../../components/blankPage');
const Layout = require('../../../../../../src/react/wires/layout');
const Square = require('../../../../../../src/react/wires/square');
const Rectangle = require('../../../../../../src/react/wires/rectangle');
const Spacer = require('../../../../../../src/react/wires/spacer');

module.exports = () => (
  <Page>
    <Layout direction="vertical" color="lightgrey">
      <Square size="2" />
      <Layout direction="horizontal">
        <Square size="2" />
        <Square size="2" color="grey" />
        <Spacer />
        <Rectangle width="12" height="2" color="grey" />
        <Square size="2" />
      </Layout>
      <Square size="2" />
    </Layout>

    <Layout direction="vertical" color="white">
      <Square size="10" />
      <div className="vs-container">
        <div className="vs-row">
          <div className="vs-col-xl-6">
            <Rectangle height="24" color="lightgrey" />
          </div>
          <div className="vs-col-xl-6 vs-push-xl-2">
            <Rectangle height="1" width="12" color="lightgrey" />
            <Rectangle height="3" />
            <Rectangle height="1" color="lightgrey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="lightgrey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="lightgrey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="lightgrey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="lightgrey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="lightgrey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="lightgrey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="lightgrey" />
            <Rectangle height="1" />
          </div>
        </div>
      </div>
      <Square size="10" />
    </Layout>

    <Layout direction="vertical" color="#515151">
      <Square size="6" />
      <div className="vs-container">
        <div className="vs-row">
          <div className="vs-col-xl-4">
            <Rectangle height="19" color="grey" />
          </div>
          <div className="vs-col-xl-4">
            <Rectangle height="1" width="12" color="grey" />
            <Rectangle height="3" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
          </div>
          <div className="vs-col-xl-4">
            <Rectangle height="1" width="12" color="grey" />
            <Rectangle height="3" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
          </div>
          <div className="vs-col-xl-4">
            <Rectangle height="1" width="12" color="grey" />
            <Rectangle height="3" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
            <Rectangle height="1" color="grey" />
            <Rectangle height="1" />
          </div>
        </div>
      </div>
      <Square size="6" />
      <div className="vs-container">
        <div className="vs-row">
          <div className="vs-col-xl-16">
            <Layout direction="horizontal">
              <Rectangle height="1" width="12" color="grey" />
              <Spacer />
              <Rectangle height="1" width="20" color="grey" />
            </Layout>
          </div>
        </div>
      </div>
      <Square size="4" />
    </Layout>
  </Page>
);
