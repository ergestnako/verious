const React = require('react');
const Page = require('../../../templates/Page');
const HeroGif = require('../../../components/HeroGif');
const { Container } = require('verious-react/components/Container/Container');
const { Grid } = require('verious-react/components/Grid/Grid');
const { Row } = require('verious-react/components/Row/Row');
const { Column } = require('verious-react/components/Column/Column');
const { Heading } = require('verious-react/components/Heading/Heading');
const { Paragraph } = require('verious-react/components/Paragraph/Paragraph');
const { Code } = require('verious-react/components/Code/Code');
const {
  BackgroundColor
} = require('verious-react/components/BackgroundColor/BackgroundColor');
const Navigator = require('../../../components/Navigator');

module.exports = () => (
  <Page>
    <HeroGif
      source="https://media.giphy.com/media/QjgVkFzoTxMYg/giphy.gif"
      title="Develop and Deploy"
      subtitle="Time to get this thing on the interwebs."
    />
    <Container padding={[8, 0, 2, 0]}>
      <Grid>
        <Row>
          <Column span={[12, 12, 6, 6, 6]} push={[0, 0, 3, 3, 3]}>
            <Heading size="2">Develop and Deploy</Heading>
            <Paragraph>
              There are two main command line scripts to run in the boilerplate
              project; one for developing the site and one for building the
              site. The development script stands up a local server at{' '}
              <a href="http://localhost:8000">http://localhost:8000</a> and live
              reloads the website as you make changes. To start development run:
            </Paragraph>
          </Column>
        </Row>
      </Grid>
    </Container>
    <BackgroundColor color="grey-100">
      <Container padding={[4, 0, 4, 0]}>
        <Grid>
          <Row>
            <Column span={[12, 12, 6, 6, 6]} push={[0, 0, 3, 3, 3]}>
              <Code>yarn develop</Code>
            </Column>
          </Row>
        </Grid>
      </Container>
    </BackgroundColor>
    <Container padding={[2, 0, 2, 0]}>
      <Grid>
        <Row>
          <Column span={[12, 12, 6, 6, 6]} push={[0, 0, 3, 3, 3]}>
            <Paragraph>
              Now if we hit{' '}
              <a href="http://localhost:8000">http://localhost:8000</a> in the
              browser we should see our homepage. Hello World!
            </Paragraph>
            <Paragraph>
              We can build the site now using the build script. Simply stop the
              development script with ctrl + c and run:
            </Paragraph>
          </Column>
        </Row>
      </Grid>
    </Container>
    <BackgroundColor color="grey-100">
      <Container padding={[4, 0, 4, 0]}>
        <Grid>
          <Row>
            <Column span={[12, 12, 6, 6, 6]} push={[0, 0, 3, 3, 3]}>
              <Code>yarn build</Code>
            </Column>
          </Row>
        </Grid>
      </Container>
    </BackgroundColor>
    <Container padding={[2, 0, 8, 0]}>
      <Grid>
        <Row>
          <Column span={[12, 12, 6, 6, 6]} push={[0, 0, 3, 3, 3]}>
            <Paragraph>
              The site is now built to the /public directory where is can be
              deployed to any static hosting service. Our favorite is{' '}
              <a href="https://www.netlify.com/">Netlify</a> and you can find
              the Netlify quickstart{' '}
              <a href="https://www.netlify.com/docs/">here</a>.
            </Paragraph>
            <Container height={2} />
            <Navigator
              previousLink="/blog/getting-started/"
              previousLabel="Getting Started"
              nextLink="/blog/directory-structure/"
              nextLabel="Directory Structure"
            />
          </Column>
        </Row>
      </Grid>
    </Container>
  </Page>
);
