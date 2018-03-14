const React = require('react');
const { Grid } = require('verious-react/components/Grid/Grid');
const { Row } = require('verious-react/components/Row/Row');
const { Column } = require('verious-react/components/Column/Column');
const { Heading } = require('verious-react/components/Heading/Heading');
const Square = require('../../../react/components/Square');
const ColorCard = require('../../components/ColorCard');

module.exports = ({ title, color }) => (
  <Grid>
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
  </Grid>
);
