const React = require('react');
const Head = require('../head');
const PropTypes = require('prop-types');

const component = ({ children }) => (
  <html className="vs-html" lang="en">
    <Head />
    <body>
      <div className="vs-clearfix" style={{ position: 'relative' }} >
        { children }
        <div className="vs-baseline" />
      </div>
    </body>
  </html>
);

component.propTypes = {
  children: PropTypes.node.isRequired,
};

module.exports = component;
