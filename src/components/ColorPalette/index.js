const React = require('react');
const { Container } = require('verious-react/components/Container/Container');
const { Grid } = require('verious-react/components/Grid/Grid');
const { Row } = require('verious-react/components/Row/Row');
const { Column } = require('verious-react/components/Column/Column');
const { Heading } = require('verious-react/components/Heading/Heading');
const ColorCard = require('../../components/ColorCard');

module.exports = ({ title, color }) => (
  <Grid>
    <Row>
      <Column span={[12, 12, 12, 12, 12]}>
        <Heading size={2}>{title}</Heading>
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-50`} />
        <Container height={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-100`} />
        <Container height={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-200`} />
        <Container height={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-300`} />
        <Container height={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-400`} />
        <Container height={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-500`} />
        <Container height={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-600`} />
        <Container height={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-700`} />
        <Container height={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-800`} />
        <Container height={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-900`} />
        <Container height={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-a100`} />
        <Container height={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-a200`} />
        <Container height={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-a400`} />
        <Container height={2} />
      </Column>
      <Column span={[6, 6, 4, 4, 4]}>
        <ColorCard color={`${color}-a700`} />
        <Container height={2} />
      </Column>
    </Row>
  </Grid>
);
