const React = require('react');
const Page = require('../../templates/Page');
const Hero = require('../../components/Hero');
const Wrapper = require('../../../react/components/Wrapper');
const Container = require('../../../react/components/Container');
const Row = require('../../../react/components/Row');
const Column = require('../../../react/components/Column');
const Heading = require('../../../react/components/Heading');
const Paragraph = require('../../../react/components/Paragraph');
const BackgroundColor = require('../../../react/components/BackgroundColor');
const Square = require('../../../react/components/Square');
const Code = require('../../../react/components/Code');

module.exports = () => (
  <Page>
    <Hero title="Layout" subtitle="Documentation for layout." />
    <Wrapper padding={[8, 0, 8, 0]}>
      <Container>
        <Row>
          <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
            <Heading size={2}>Wrapper</Heading>
            <Code>
              {`
import React from 'react';
import Wrapper from 'verious/dist/react/components/Wrapper';

module.exports = () =>
  <Wrapper padding={[2, 0, 2, 0]}>
    ...
  </Wrapper>
              `}
            </Code>
            <BackgroundColor color="vs-blue-500">
              <Wrapper padding={[2, 0, 2, 0]}>
                <BackgroundColor color="vs-grey-100">
                  <Square size={4} />
                </BackgroundColor>
              </Wrapper>
            </BackgroundColor>
            <Square size={2} />
            <Code>
              {`
import React from 'react';
import Wrapper from 'verious/dist/react/components/Wrapper';

module.exports = () =>
  <Wrapper padding={[[1, 2, 3, 4], 0, [1, 2, 3, 4], 0]}>
    ...
  </Wrapper>
              `}
            </Code>
            <BackgroundColor color="vs-blue-500">
              <Wrapper padding={[[1, 2, 3, 4], 0, [1, 2, 3, 4], 0]}>
                <BackgroundColor color="vs-grey-100">
                  <Square size={4} />
                </BackgroundColor>
              </Wrapper>
            </BackgroundColor>
            <Paragraph>Container</Paragraph>
            <Paragraph>Row</Paragraph>
            <Paragraph>Column</Paragraph>
            <Paragraph>Layout</Paragraph>
            <Paragraph>Spacer</Paragraph>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  </Page>
);
