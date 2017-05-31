const React = require('react');
const Page = require('../../../components/blankPage');
const Layout = require('../../../../../../src/react/components/layout');
const Square = require('../../../../../../src/react/components/square');
const Rectangle = require('../../../../../../src/react/components/rectangle');
const Spacer = require('../../../../../../src/react/components/spacer');

// {
//   "heroTitle": "Hello World"
// }

module.exports = (data) => (
  <Page>
    <Layout direction="vertical" color="lightgrey">
      <Square size="24" />
      <Layout direction="horizontal">
        <Spacer />
        <p className="vs-p">{ data.heroTitle }</p>
        <Spacer />
      </Layout>
      <Square size="24" />
    </Layout>

    <Layout direction="vertical" color="white">
      <Square size="12" />
      <div className="vs-container">
        <div className="vs-row">
          <div className="vs-col-xl-12">
            <Rectangle height="24" color="lightgrey" />
          </div>
          <div className="vs-col-xl-4">
            <Rectangle height="1" color="lightgrey" />
            <Square size="1" />
            <Rectangle height="1" color="lightgrey" />
            <Square size="1" />
            <Rectangle height="1" color="lightgrey" />
            <Square size="1" />
            <Rectangle height="1" color="lightgrey" />
            <Square size="1" />
            <Rectangle height="1" color="lightgrey" />
            <Square size="1" />
            <Rectangle height="1" color="lightgrey" />
            <Square size="1" />
          </div>
        </div>
      </div>
      <Square size="12" />
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
