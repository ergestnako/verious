const React = require('react');
const Page = require('../../templates/Page');
const Hero = require('../../components/Hero');
const Wrapper = require('../../../react/components/Wrapper');
const Container = require('../../../react/components/Container');
const Row = require('../../../react/components/Row');
const Column = require('../../../react/components/Column');
const Button = require('../../../react/components/Button');
const HorizontalRule = require('../../../react/components/HorizontalRule');
const Square = require('../../../react/components/Square');
const Paragraph = require('../../../react/components/Paragraph');

module.exports = () => (
  <Page>
    <Hero
      title="Atoms"
      subtitle="Documentation for atoms."
    />
    <Wrapper padding={[8, 0, 8, 0]}>
      <Container>
        <Row>
          <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
            <Paragraph>Button</Paragraph>
            <Button
              backgroundColor="vs-pink-500"
              textColor="vs-white"
              label="Button"
            />
            <Paragraph>HorizontalRule</Paragraph>
            <HorizontalRule
              height={3}
              backgroundColor="vs-grey-100"
              lineColor="vs-grey-400"
            />
            <Paragraph>Square</Paragraph>
            <Square
              size={3}
              backgroundColor="vs-grey-100"
            />
            <Paragraph>Rectangle</Paragraph>
            <Paragraph>Angle</Paragraph>
            <Paragraph>Image</Paragraph>
            <Paragraph>Dropdown</Paragraph>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  </Page>
);