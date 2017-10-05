const React = require('react');
const Page = require('../../templates/Page');
const Hero = require('../../components/Hero');
const Wrapper = require('../../../react/components/Wrapper');
const Container = require('../../../react/components/Container');
const Row = require('../../../react/components/Row');
const Column = require('../../../react/components/Column');
const Heading = require('../../../react/components/Heading');
const Paragraph = require('../../../react/components/Paragraph');
const BackgroundColor = require('../../../react/components/BackgroundColor');
const Square = require('../../../react/components/Square');
const AnimateAttention = require('../../../react/components/AnimateAttention');

module.exports = () => (
  <Page>
    <Hero title="Interactions" subtitle="Documentation for interactions." />
    <Wrapper padding={[8, 0, 8, 0]}>
      <Container>
        <Row>
          <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
            <Heading size={2}>Animate Attention</Heading>
          </Column>
          <Column span={[3, 3, 4, 4]} push={[0, 0, 0, 0]}>
            <AnimateAttention type="bounce">
              <BackgroundColor color="vs-red-500">
                <Square size={4} />
              </BackgroundColor>
            </AnimateAttention>
            <Paragraph>Bounce</Paragraph>
          </Column>
          <Column span={[3, 3, 4, 4]} push={[0, 0, 0, 0]}>
            <AnimateAttention type="flash">
              <BackgroundColor color="vs-pink-500">
                <Square size={4} />
              </BackgroundColor>
            </AnimateAttention>
            <Paragraph>Flash</Paragraph>
          </Column>
          <Column span={[3, 3, 4, 4]} push={[0, 0, 0, 0]}>
            <AnimateAttention type="pulse">
              <BackgroundColor color="vs-purple-500">
                <Square size={4} />
              </BackgroundColor>
            </AnimateAttention>
            <Paragraph>Pulse</Paragraph>
          </Column>
          <Column span={[3, 3, 4, 4]} push={[0, 0, 0, 0]}>
            <AnimateAttention type="rubberBand">
              <BackgroundColor color="vs-deeppurple-500">
                <Square size={4} />
              </BackgroundColor>
            </AnimateAttention>
            <Paragraph>Rubber Band</Paragraph>
          </Column>
          <Column span={[3, 3, 4, 4]} push={[0, 0, 0, 0]}>
            <AnimateAttention type="shake">
              <BackgroundColor color="vs-indigo-500">
                <Square size={4} />
              </BackgroundColor>
            </AnimateAttention>
            <Paragraph>Shake</Paragraph>
          </Column>
          <Column span={[3, 3, 4, 4]} push={[0, 0, 0, 0]}>
            <AnimateAttention type="swing">
              <BackgroundColor color="vs-blue-500">
                <Square size={4} />
              </BackgroundColor>
            </AnimateAttention>
            <Paragraph>Swing</Paragraph>
          </Column>
          <Column span={[3, 3, 4, 4]} push={[0, 0, 0, 0]}>
            <AnimateAttention type="tada">
              <BackgroundColor color="vs-lightblue-500">
                <Square size={4} />
              </BackgroundColor>
            </AnimateAttention>
            <Paragraph>Tada</Paragraph>
          </Column>
          <Column span={[3, 3, 4, 4]} push={[0, 0, 0, 0]}>
            <AnimateAttention type="wobble">
              <BackgroundColor color="vs-cyan-500">
                <Square size={4} />
              </BackgroundColor>
            </AnimateAttention>
            <Paragraph>Wobble</Paragraph>
          </Column>
          <Column span={[3, 3, 4, 4]} push={[0, 0, 0, 0]}>
            <AnimateAttention type="jello">
              <BackgroundColor color="vs-teal-500">
                <Square size={4} />
              </BackgroundColor>
            </AnimateAttention>
            <Paragraph>Jello</Paragraph>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  </Page>
);
