import React from "react";
import Container from "@verious/vs-container";
import Grid from "@verious/vs-grid";
import Row from "@verious/vs-row";
import Column from "@verious/vs-column";
import Heading from "@verious/vs-heading";
import ColorCard from "../../components/ColorCard";

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
