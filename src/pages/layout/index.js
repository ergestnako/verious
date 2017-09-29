const React = require('react');
const Page = require('../../templates/Page');
const Hero = require('../../components/Hero');
const Wrapper = require('../../../react/components/Wrapper');
const Container = require('../../../react/components/Container');
const Row = require('../../../react/components/Row');
const Column = require('../../../react/components/Column');
const Paragraph = require('../../../react/components/Paragraph');

module.exports = () => (
  <Page>
    <Hero title="Layout" subtitle="Documentation for layout." />
    <Wrapper padding={[8, 0, 8, 0]}>
      <Container>
        <Row>
          <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
            <Paragraph>Wrapper</Paragraph>
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
