const React = require('react');
const Page = require('../../templates/Page');
const Hero = require('../../components/Hero');
const { Container } = require('verious-react/components/Container/Container');
const { Grid } = require('verious-react/components/Grid/Grid');
const { Row } = require('verious-react/components/Row/Row');
const { Column } = require('verious-react/components/Column/Column');
const Paragraph = require('../../../react/components/Paragraph');
const Square = require('../../../react/components/Square');
const BackgroundGradient = require('../../../react/components/BackgroundGradient');
const BackgroundDots = require('../../../react/components/BackgroundDots');

module.exports = () => (
  <Page>
    <Hero title="Style" subtitle="Documentation for style." />
    <Container padding={[8, 0, 8, 0]}>
      <Grid>
        <Row>
          <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
            <Paragraph>BackgroundColor</Paragraph>
            <Paragraph>BackgroundImage</Paragraph>
            <Paragraph>BackgroundGradient</Paragraph>
            <BackgroundGradient
              startColor="vs-pink-500"
              endColor="vs-blue-500"
              rotation={45}
            >
              <Square size={24} />
            </BackgroundGradient>
            <Paragraph>Background Dots</Paragraph>
            <BackgroundDots
              backgroundColor="vs-black"
              dotColor="vs-white"
              width={96}
              height={24}
              density={1}
              maxRadius={4}
            >
              <Square size={24} />
            </BackgroundDots>
            <Paragraph>Shadow</Paragraph>
          </Column>
        </Row>
      </Grid>
    </Container>
  </Page>
);
