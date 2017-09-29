const React = require('react');
const Page = require('../../../templates/Page');
const HeroGif = require('../../../components/HeroGif');
const Wrapper = require('../../../../react/components/Wrapper');
const Container = require('../../../../react/components/Container');
const Row = require('../../../../react/components/Row');
const Column = require('../../../../react/components/Column');
const Heading = require('../../../../react/components/Heading');
const Paragraph = require('../../../../react/components/Paragraph');
const Square = require('../../../../react/components/Square');
const Code = require('../../../../react/components/Code');
const Navigator = require('../../../components/Navigator');

module.exports = () => (
  <Page>
    <HeroGif
      source="https://media.giphy.com/media/ePOYo3Ew3QLtK/giphy.gif"
      title="Directory Structure"
      subtitle="We don't want things to fall apart now do we?"
    />
    <Wrapper padding={[8, 0, 8, 0]}>
      <Container>
        <Row>
          <Column span={[6, 8, 8, 8]} push={[0, 2, 4, 4]}>
            <Heading size="2">Directory Structure</Heading>
            <Paragraph>
              Inside the source directory files are organized like so:
            </Paragraph>
            <Code>{`
/src
  /pages
    index.js
  /templates
    /Page
      index.js
  html.js
            `}</Code>
            <Paragraph>
              The html.js file wraps every page on the website and for now, it
              is safe to ignore this file. The /src/pages/index.js file is the
              home page; it is the only page on this website.The /src/templates
              directory holds all templates for this website so the
              /src/templates/Page/index.js files is a basic page template that
              will wrap other content. This structure makes up the the simplest
              one-page website.
            </Paragraph>
            <Paragraph>
              Say we wanted to add another page, like an about page. We would
              simple create another folder under /src/pages called "about" and
              drop a new index.js file inside. The directory structure would
              look like:
            </Paragraph>
            <Code>{`
/src
  /pages
    /about
      index.js
    index.js
  /templates
    /Page
      index.js
  html.js
            `}</Code>
            <Paragraph>
              The about page would be accessed in the browser at
              example.com/about. In this way, an entire website can be
              constructed inside the /src/pages directory.
            </Paragraph>
            <Paragraph>
              Now sometimes we will need to isolate specific pieces of our
              website for reuse and thanks to React's component model we can
              easy do that inside a new /src/components directory. Suppose we
              have Navigation, Footer, and Hero components we want to reuse
              throughout the website. We would simple drop them inside our new
              /src/components directory like so:
            </Paragraph>
            <Code>{`
/src
  /components
    /Footer
      index.js
    /Hero
      index.js
    /Navigation
      index.js
  /pages
    /about
      index.js
    index.js
  /templates
    /Page
      index.js
  html.js
            `}</Code>
            <Paragraph>
              This structure provides the basic building blocks for building a
              website.
            </Paragraph>
            <Square size="8" />
            <Navigator
              previousLink="/blog/develop-and-deploy/"
              previousLabel="Develop and Deploy"
            />
          </Column>
        </Row>
      </Container>
    </Wrapper>
  </Page>
);
