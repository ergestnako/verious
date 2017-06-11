const React = require('react');
const PropTypes = require('prop-types');

const component = ({ panel, content }) => (
  <div className="vs-layout-left-panel" data-script="vsLayoutLeftPanel">
    <div className="vs-layout-left-panel-content">
      <div style={{ position: 'relative' }}>
        { content }
        <div className="vs-baseline" />
      </div>
    </div>
    <div className="vs-layout-left-panel-overlay" />
    <div className="vs-layout-left-panel-panel">
      <div style={{ position: 'relative' }}>
        { panel }
        <div className="vs-baseline" />
      </div>
    </div>
  </div>
);

component.propTypes = {
  panel: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};

module.exports = component;
