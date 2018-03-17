import React from 'react';
import { Container } from 'verious-react/components/Container/Container';
import { Flex } from 'verious-react/components/Flex/Flex';

module.exports = ({ children, backgroundColor }) => (
  <Container height={6} width={6} style={{ position: 'relative' }}>
    <Flex
      justifyContent="center"
      alignItems="center"
      style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {children}
    </Flex>
  </Container>
);
