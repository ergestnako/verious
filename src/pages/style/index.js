const React = require('react');
const Page = require('../../templates/Page');
const Hero = require('../../components/Hero');
const Wrapper = require('../../../react/components/Wrapper');
const Container = require('../../../react/components/Container');
const Row = require('../../../react/components/Row');
const Column = require('../../../react/components/Column');
const Paragraph = require('../../../react/components/Paragraph');
const Square = require('../../../react/components/Square');
const BackgroundGradient = require('../../../react/components/BackgroundGradient');

module.exports = () => (
  <Page>
    <Hero
      title="Style"
      subtitle="Documentation for style."
    />
    <Wrapper padding={[8, 0, 8, 0]}>
      <Container>
        <Row>
          <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
            <Paragraph>BackgroundColor</Paragraph>
            <Paragraph>BackgroundImage</Paragraph>
            <Paragraph>BackgroundGradient</Paragraph>
            <BackgroundGradient startColor="vs-pink-500" endColor="vs-blue-500" rotation={45}>
              <Square size={24} />
            </BackgroundGradient>
            <Paragraph>Shadow</Paragraph>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  </Page>
);
