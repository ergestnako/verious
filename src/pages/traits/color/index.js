import React from "react";
import Container from "@verious/vs-container";
import Grid from "@verious/vs-grid";
import Row from "@verious/vs-row";
import Column from "@verious/vs-column";
import Heading from "@verious/vs-heading";
import Page from "../../../templates/Page";
import Hero from "../../../components/Hero";
import ColorPalette from "../../../components/ColorPalette";
import ColorCard from "../../../components/ColorCard";

export default () => (
  <Page>
    <Hero title="Color" subtitle="Documentation for Color." />
    <Container padding={[8, 0, 8, 0]}>
      <ColorPalette title="Red" color="vs-red" />
      <ColorPalette title="Pink" color="vs-pink" />
      <ColorPalette title="Purple" color="vs-purple" />
      <ColorPalette title="Deep Purple" color="vs-deeppurple" />
      <ColorPalette title="Indigo" color="vs-indigo" />
      <ColorPalette title="Blue" color="vs-blue" />
      <ColorPalette title="Light Blue" color="vs-lightblue" />
      <ColorPalette title="Cyan" color="vs-cyan" />
      <ColorPalette title="Teal" color="vs-teal" />
      <ColorPalette title="Green" color="vs-green" />
      <ColorPalette title="Light Green" color="vs-lightgreen" />
      <ColorPalette title="Lime" color="vs-lime" />
      <ColorPalette title="Yellow" color="vs-yellow" />
      <ColorPalette title="Amber" color="vs-amber" />
      <ColorPalette title="Orange" color="vs-orange" />
      <ColorPalette title="Deep Orange" color="vs-deeporange" />
      <ColorPalette title="Brown" color="vs-brown" />
      <ColorPalette title="Grey" color="vs-grey" />
      <ColorPalette title="Blue Grey" color="vs-bluegrey" />
      <Container>
        <Grid>
          <Row>
            <Column span={[12, 12, 12, 12, 12]}>
              <Heading size={2}>Black and White</Heading>
            </Column>
            <Column span={[6, 6, 4, 4, 4]}>
              <ColorCard color="vs-white" />
              <Container height={2} />
            </Column>
            <Column span={[6, 6, 4, 4, 4]}>
              <ColorCard color="vs-black" />
              <Container height={2} />
            </Column>
          </Row>
        </Grid>
      </Container>
    </Container>
  </Page>
);
