const React = require('react');
const Head = require('../head');
const PropTypes = require('prop-types');

const component = ({ children }) => (
  <html lang="en">
    <Head />
    <body>
      { children }
    </body>
  </html>
);

component.propTypes = {
  children: PropTypes.node.isRequired,
};

module.exports = component;
