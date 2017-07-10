const React = require('react');

module.exports = () => (
  <div className="layout-left-panel verious">
    <div className="layout-left-panel-container">
      <div className="layout-left-panel-row">
        <div className="layout-left-panel-header">
          <h2>Left Panel Layout</h2>
        </div>
      </div>
      <div className="layout-left-panel-row">
        <div className="layout-left-panel-left">
          <h3 className="vs-h5">Class</h3>
        </div>
        <div className="layout-left-panel-right">
          <pre>
            <code>
              {`
<html class="vs-html vs-layout-left-panel-html">
  <body class="vs-layout-left-panel-body">
    <div
      class="vs-layout-left-panel"
      data-script="vsLayoutLeftPanel">
      <div class="vs-layout-left-panel-panel">
        ...
      </div>
      <div class="vs-layout-left-panel-content">
        <div class="vs-layout-left-panel-button">
          ...
        </div>
        ...
        <div class="vs-layout-left-panel-overlay">
          ...
        </div>
      </div>
    </div>
  </body>
</html>
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
  </div>
);
