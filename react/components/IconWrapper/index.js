const React = require('react');
const Square = require('../Square');
const Flex = require('../Flex');

module.exports = ({ children, backgroundColor }) => (
  <Square
    size={3}
    style={{ position: 'relative' }}
    backgroundColor={backgroundColor}
  >
    <Flex
      justifyContent="center"
      alignItems="center"
      style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {children}
    </Flex>
  </Square>
);
