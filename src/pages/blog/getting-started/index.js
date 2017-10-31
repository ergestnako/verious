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
      source="https://media.giphy.com/media/3oEjHLC7SxZtxVW5eE/giphy.gif"
      title="Getting Started"
      subtitle="Things are going to get serious kids."
    />
    <Wrapper padding={[8, 0, 8, 0]}>
      <Container>
        <Row>
          <Column span={[12, 12, 6, 6, 6]} push={[0, 0, 3, 3, 3]}>
            <Heading size="2">The Boilerplate, Get It!</Heading>
            <Paragraph>
              Everyone needs a good starting point. Head over to the{' '}
              <a href="https://www.gatsbyjs.org/docs/">
                Gatsby documentation
              </a>{' '}
              to install the command line interface globally.
            </Paragraph>
            <Paragraph>
              The{' '}
              <a href="https://github.com/cpinnix/verious-boilerplate">
                Verious boilerplate
              </a>{' '}
              comes with Gatsby and Verious code built right in. To start a new
              website with the boilerplate run:
            </Paragraph>
            <Code>{`
gatsby new [SITE_DIRECTORY] https://github.com/cpinnix/verious-boilerplate
            `}</Code>
            <Paragraph />
            <Paragraph>
              This project requires a handful of dependencies to run and
              luckily, these can be retrieved with a single command:
            </Paragraph>
            <Code>{`
cd [SITE_DIRECTORY]
yarn install
            `}</Code>
            <Paragraph>
              After these dependencies install, we are ready to rock. But first,
              we must learn to{' '}
              <a href="/blog/develop-and-deploy/">develop and deploy</a>.
            </Paragraph>
            <Square size="8" />
            <Navigator
              nextLink="/blog/develop-and-deploy/"
              nextLabel="Develop and Deploy"
            />
          </Column>
        </Row>
      </Container>
    </Wrapper>
  </Page>
);
