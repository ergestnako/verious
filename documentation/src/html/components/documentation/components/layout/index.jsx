const React = require('react');
const Layout = require('../../../../../../../src/react/components/layout');
const Square = require('../../../../../../../src/react/components/square');
const Rectangle = require('../../../../../../../src/react/components/rectangle');
const Spacer = require('../../../../../../../src/react/components/spacer');

module.exports = () => (
  <div className="documentation-layout verious">
    <div className="documentation-layout-container">
      <div className="documentation-layout-row">
        <div className="documentation-layout-header">
          <h2>Layout</h2>
        </div>
      </div>
      <div className="documentation-layout-row">
        <div className="documentation-layout-content">
          <h3>Static Markup</h3>
          <pre>
            <code>
              {`
<div className="vs-layout vs-layout--horizontal">
  ...
</div>

<div className="vs-layout vs-layout--vertical">
  ...
</div>
              `}
            </code>
          </pre>
          <h3>React Component</h3>
          <pre>
            <code>
              {`
<Layout direction="horizontal">
  ...
</Layout>

<Layout direction="vertical">
  ...
</Layout>
              `}
            </code>
          </pre>
          <h3>Advanced Layout in React</h3>
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
          <Square size="2" />
          <pre>
            <code>
              {`
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
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
  </div>
);
