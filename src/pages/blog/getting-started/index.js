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

module.exports = () => (
  <Page>
    <HeroGif
      source="https://media.giphy.com/media/3oEjHLC7SxZtxVW5eE/giphy.gif"
      title="Installation"
      subtitle="Things are going to get serious kids."
    />
    <Container padding={[8, 0, 2, 0]}>
      <Grid>
        <Row>
          <Column span={[12, 12, 6, 6, 6]} push={[0, 0, 3, 3, 3]}>
            <Heading size="2">The Boilerplate, Get It!</Heading>
            <Paragraph>
              Everyone needs a good starting point. Head over to the{" "}
              <a href="https://www.gatsbyjs.org/docs/">Gatsby documentation</a>{" "}
              to install the command line interface globally.
            </Paragraph>
            <Paragraph>
              The{" "}
              <a href="https://github.com/cpinnix/verious-boilerplate">
                Verious boilerplate
              </a>{" "}
              comes with Gatsby and Verious code built right in. To start a new
              website with the boilerplate run:
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
gatsby new [SITE_DIRECTORY] https://github.com/cpinnix/verious-boilerplate
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
            <Paragraph />
            <Paragraph>
              This project requires a handful of dependencies to run and
              luckily, these can be retrieved with a single command:
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
cd [SITE_DIRECTORY]
yarn install
            `}</Code>
            </Column>
          </Row>
        </Grid>
      </Container>
    </BackgroundColor>
    <Container padding={[3, 0, 8, 0]}>
      <Grid>
        <Row>
          <Column span={[12, 12, 6, 6, 6]} push={[0, 0, 3, 3, 3]}>
            <Paragraph>
              After these dependencies install, we are ready to rock. But first,
              we must learn to{" "}
              <a href="/blog/develop-and-deploy/">develop and deploy</a>.
            </Paragraph>
            <Container height={2} />
            <Navigator
              nextLink="/blog/develop-and-deploy/"
              nextLabel="Develop and Deploy"
            />
          </Column>
        </Row>
      </Grid>
    </Container>
  </Page>
);
