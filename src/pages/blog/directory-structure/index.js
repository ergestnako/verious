import React from "react";
import Container from "@verious/vs-container";
import Grid from "@verious/vs-grid";
import Row from "@verious/vs-row";
import Column from "@verious/vs-column";
import Heading from "@verious/vs-heading";
import Paragraph from "@verious/vs-paragraph";
import Code from "@verious/vs-code";
import BackgroundColor from "@verious/vs-background-color";
import Page from "../../../templates/Page";
import HeroGif from "../../../components/HeroGif";
import Navigator from "../../../components/Navigator";

export default () => (
  <Page>
    <HeroGif
      source="https://media.giphy.com/media/ePOYo3Ew3QLtK/giphy.gif"
      title="Directory Structure"
      subtitle="We don't want things to fall apart now do we?"
    />
    <Container padding={[8, 0, 2, 0]}>
      <Grid>
        <Row>
          <Column span={[12, 12, 6, 6, 6]} push={[0, 0, 3, 3, 3]}>
            <Heading size="2">Directory Structure</Heading>
            <Paragraph>
              Inside the source directory files are organized like so:
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
              <Code>{`
/src
  /pages
    index.js
  /templates
    /Page
      index.js
  html.js
            `}</Code>
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
          </Column>
        </Row>
      </Grid>
    </Container>
    <BackgroundColor color="grey-100">
      <Container padding={[4, 0, 4, 0]}>
        <Grid>
          <Row>
            <Column span={[12, 12, 6, 6, 6]} push={[0, 0, 3, 3, 3]}>
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
              The about page would be accessed in the browser at
              example.com/about. In this way, an entire website can be
              constructed inside the /src/pages directory.
            </Paragraph>
            <Paragraph>
              Now sometimes we will need to isolate specific pieces of our
              website for reuse and thanks to React{`'`}s component model we can
              easy do that inside a new /src/components directory. Suppose we
              have Navigation, Footer, and Hero components we want to reuse
              throughout the website. We would simple drop them inside our new
              /src/components directory like so:
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
              This structure provides the basic building blocks for building a
              website.
            </Paragraph>
            <Container height={2} />
            <Navigator
              previousLink="/blog/develop-and-deploy/"
              previousLabel="Develop and Deploy"
            />
          </Column>
        </Row>
      </Grid>
    </Container>
  </Page>
);
