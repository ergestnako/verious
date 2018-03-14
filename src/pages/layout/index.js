const React = require('react');
const Page = require('../../templates/Page');
const Hero = require('../../components/Hero');
const { Grid } = require('verious-react/components/Grid/Grid');
const { Row } = require('verious-react/components/Row/Row');
const { Column } = require('verious-react/components/Column/Column');
const Heading = require('../../../react/components/Heading');
const Paragraph = require('../../../react/components/Paragraph');
const BackgroundColor = require('../../../react/components/BackgroundColor');
const Square = require('../../../react/components/Square');
const Code = require('../../../react/components/Code');

module.exports = () => (
  <Page>
    <Hero title="Layout" subtitle="Documentation for layout." />
    <Container padding={[8, 0, 8, 0]}>
      <Grid>
        <Row>
          <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
            <Heading size={2}>Container</Heading>
            <Code>
              {`
import React from 'react';
import Container from 'verious/dist/react/components/Container';

module.exports = () =>
  <Container padding={[2, 0, 2, 0]}>
    ...
  </Container>
              `}
            </Code>
            <BackgroundColor color="vs-blue-500">
              <Container padding={[2, 0, 2, 0]}>
                <BackgroundColor color="vs-grey-100">
                  <Square size={4} />
                </BackgroundColor>
              </Container>
            </BackgroundColor>
            <Square size={2} />
            <Code>
              {`
import React from 'react';
import Container from 'verious/dist/react/components/Container';

module.exports = () =>
  <Container padding={[[1, 2, 3, 4], 0, [1, 2, 3, 4], 0]}>
    ...
  </Container>
              `}
            </Code>
            <BackgroundColor color="vs-blue-500">
              <Container padding={[[1, 2, 3, 4], 0, [1, 2, 3, 4], 0]}>
                <BackgroundColor color="vs-grey-100">
                  <Square size={4} />
                </BackgroundColor>
              </Container>
            </BackgroundColor>
            <Paragraph>Grid</Paragraph>
            <Paragraph>Row</Paragraph>
            <Paragraph>Column</Paragraph>
            <Paragraph>Layout</Paragraph>
            <Paragraph>Spacer</Paragraph>
            <Paragraph>Flex</Paragraph>
          </Column>
        </Row>
      </Grid>
    </Container>
  </Page>
);
