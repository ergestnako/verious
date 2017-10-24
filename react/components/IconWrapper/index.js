const React = require('react');
const Square = require('../Square');
const Layout = require('../Layout');

module.exports = ({ children, backgroundColor }) => (
  <Square
    size={3}
    style={{ position: 'relative' }}
    backgroundColor={backgroundColor}
  >
    <Layout
      direction="center"
      style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {children}
    </Layout>
  </Square>
);
