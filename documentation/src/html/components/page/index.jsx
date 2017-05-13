const React = require('react');
const Head = require('../head');
const Sidebar = require('../sidebar');
const LayoutLeftPanel = require('../layout-left-panel');
const PropTypes = require('prop-types');

const component = ({ children }) => (
  <html className="vs-html vs-layout-left-panel-html" lang="en">
    <Head />
    <body className="vs-layout-left-panel-body">
      <div className="vs-clearfix" style={{ position: 'relative' }} >
        <LayoutLeftPanel
          panel={
            <Sidebar />
          }
          content={children}
        />
      </div>
    </body>
  </html>
);

component.propTypes = {
  children: PropTypes.node.isRequired,
};

module.exports = component;
