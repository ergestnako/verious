const React = require('react');
const Page = require('../../../templates/Page');
const Hero = require('../../../components/Hero');
const Wrapper = require('../../../../react/components/Wrapper');
const ColorPalette = require('../../../components/ColorPalette');
const Container = require('../../../../react/components/Container');
const Row = require('../../../../react/components/Row');
const Column = require('../../../../react/components/Column');
const Heading = require('../../../../react/components/Heading');
const Square = require('../../../../react/components/Square');
const ColorCard = require('../../../components/ColorCard');

module.exports = () => (
  <Page>
    <Hero title="Color" subtitle="Documentation for Color." />
    <Wrapper padding={[8, 0, 8, 0]}>
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
      <Wrapper>
        <Container>
          <Row>
            <Column span={[12, 12, 12, 12, 12]}>
              <Heading size={2}>Black and White</Heading>
            </Column>
            <Column span={[6, 6, 4, 4, 4]}>
              <ColorCard color="vs-white" />
              <Square size={2} />
            </Column>
            <Column span={[6, 6, 4, 4, 4]}>
              <ColorCard color="vs-black" />
              <Square size={2} />
            </Column>
          </Row>
        </Container>
      </Wrapper>
    </Wrapper>
  </Page>
);
