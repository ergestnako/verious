const React = require('react');
const Page = require('../../../templates/Page');
const HeroGif = require('../../../components/HeroGif');
const Wrapper = require('../../../../react/components/Wrapper');
const Container = require('../../../../react/components/Container');
const Row = require('../../../../react/components/Row');
const Column = require('../../../../react/components/Column');
const Heading = require('../../../../react/components/Heading');
const Paragraph = require('../../../../react/components/Paragraph');
const Code = require('../../../../react/components/Code');
const Square = require('../../../../react/components/Square');
const Navigator = require('../../../components/Navigator');

module.exports = () => (
  <Page>
    <HeroGif
      source="https://media.giphy.com/media/QjgVkFzoTxMYg/giphy.gif"
      title="Develop and Deploy"
      subtitle="Time to get this thing on the interwebs."
    />
    <Wrapper padding={[8, 0, 8, 0]}>
      <Container>
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
            <Code>{`
yarn develop
            `}</Code>
            <Paragraph>
              Now if we hit{' '}
              <a href="http://localhost:8000">http://localhost:8000</a> in the
              browser we should see our homepage. Hello World!
            </Paragraph>
            <Paragraph>
              We can build the site now using the build script. Simply stop the
              development script with ctrl + c and run:
            </Paragraph>
            <Code>{`
yarn build
            `}</Code>
            <Paragraph>
              The site is now built to the /public directory where is can be
              deployed to any static hosting service. Our favorite is{' '}
              <a href="https://www.netlify.com/">Netlify</a> and you can find
              the Netlify quickstart{' '}
              <a href="https://www.netlify.com/docs/">here</a>.
            </Paragraph>
            <Square size="8" />
            <Navigator
              previousLink="/blog/getting-started/"
              previousLabel="Getting Started"
              nextLink="/blog/directory-structure/"
              nextLabel="Directory Structure"
            />
          </Column>
        </Row>
      </Container>
    </Wrapper>
  </Page>
);
