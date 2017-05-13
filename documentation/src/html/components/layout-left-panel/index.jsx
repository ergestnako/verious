const React = require('react');
const PropTypes = require('prop-types');

const component = ({ panel, content }) => (
  <div className="vs-layout-left-panel" data-script="vsLayoutLeftPanel">
    <div className="vs-layout-left-panel-panel">
      { panel }
    </div>
    <div className="vs-layout-left-panel-content">
      { content }
      <div className="vs-layout-left-panel-overlay" />
    </div>
  </div>
);

component.propTypes = {
  panel: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};

module.exports = component;
