const React = require('react');
const Container = require('../../../react/components/Container');
const Row = require('../../../react/components/Row');
const Column = require('../../../react/components/Column');
const Heading = require('../../../react/components/Heading');
const Square = require('../../../react/components/Square');
const ColorCard = require('../../components/ColorCard');

module.exports = ({ title, color }) => (
  <Container>
    <Row>
      <Column span={[12, 12, 12, 12, 12]}>
        <Heading size={2}>{title}</Heading>
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-50`} />
        <Square size={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-100`} />
        <Square size={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-200`} />
        <Square size={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-300`} />
        <Square size={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-400`} />
        <Square size={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-500`} />
        <Square size={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-600`} />
        <Square size={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-700`} />
        <Square size={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-800`} />
        <Square size={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-900`} />
        <Square size={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-a100`} />
        <Square size={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-a200`} />
        <Square size={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-a400`} />
        <Square size={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-a700`} />
        <Square size={2} />
      </Column>
    </Row>
  </Container>
);
