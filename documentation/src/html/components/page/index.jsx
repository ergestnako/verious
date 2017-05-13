const React = require('react');
const Head = require('../head');
const Sidebar = require('../sidebar');
const Footer = require('../footer');
const LayoutLeftPanel = require('../layout-left-panel');
const PropTypes = require('prop-types');

const component = ({ children }) => (
  <html className="vs-html vs-layout-left-panel-html" lang="en">
    <Head />
    <body className="vs-layout-left-panel-body">
      <div className="vs-clearfix" style={{ position: 'relative' }} >
        <div data-script="vsBaseline">
          <LayoutLeftPanel
            panel={
              <Sidebar />
            }
            content={
              <div>
                { children }
                <Footer />
              </div>
            }
          />
        </div>
      </div>
    </body>
  </html>
);

component.propTypes = {
  children: PropTypes.node.isRequired,
};

module.exports = component;
