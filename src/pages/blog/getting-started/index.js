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
          <Column span={[6, 8, 8, 8]} push={[0, 2, 4, 4]}>
            <Heading size="2">The Boilerplate, Get It!</Heading>
            <Paragraph>
              Everyone needs a good starting point. To download the{' '}
              <a href="https://github.com/cpinnix/verious-boilerplate">
                verious boilerplate
              </a>{' '}
              run:
            </Paragraph>
            <Code>{`
git clone git@github.com:cpinnix/verious-boilerplate.git
            `}</Code>
            <Paragraph>
              The boilerplate comes with Gatsby and Verious code built right in.
              Because the boilerplate is a git repository, the first thing to do
              is rename the root directory and delete the git directory inside.
              To do that run:
            </Paragraph>
            <Code>{`
mv verious-boilerplate your-project-name
cd your-project-name
rm -rf .git
            `}</Code>
            <Paragraph>
              This project requires a handful of dependencies to run and
              luckily, these can be retrieved with a single command:
            </Paragraph>
            <Code>{`
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
