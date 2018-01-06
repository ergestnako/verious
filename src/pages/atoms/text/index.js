const React = require('react');
const Page = require('../../../templates/Page');
const Hero = require('../../../components/Hero');
const BackgroundColor = require('../../../../react/components/BackgroundColor');
const Wrapper = require('../../../../react/components/Wrapper');
const Container = require('../../../../react/components/Container');
const Row = require('../../../../react/components/Row');
const Column = require('../../../../react/components/Column');
const Heading = require('../../../../react/components/Heading');
const Paragraph = require('../../../../react/components/Paragraph');
const Code = require('../../../../react/components/Code');
const List = require('../../../../react/components/List');
const ListItem = require('../../../../react/components/ListItem');
const Text = require('../../../../react/components/Text');

module.exports = () => (
  <Page>
    <Hero title="Text" />
    <Wrapper padding={[8, 0, 8, 0]}>
      <Container>
        <Row>
          <Column span={[12, 12, 10, 6, 6]}>
            <Heading size={2}>Overview</Heading>
            <Paragraph>
              The text component is the basis on which the Paragraph, Heading,
              and ListItem components are built on. The text component should be
              used when you need to go outside the bounds of what other
              typography components can do, like rendering a large headline.
            </Paragraph>
            <Heading size={2}>Properties</Heading>
            <List unstyled>
              <ListItem>
                tag - Defaults to span, but can be any HTML tag. Recommend h1 -
                h6, p, or a tags.
              </ListItem>
              <ListItem>size - Responsive size from 0 to 15.</ListItem>
              <ListItem>font - Only supported font is helvetica.</ListItem>
              <ListItem>
                color - Can be HEX, RGB, web colors, or Verious colors.
              </ListItem>
            </List>
            <Heading size={2}>Design Guidelines</Heading>
            <Paragraph>
              Mind line-length: try not to set text too wide as it becomes hard to read. Watch contrast: make sure text is easy to read.
            </Paragraph>
          </Column>
          <Column span={[12, 12, 12, 12, 12]}>
            <Heading size={2}>Use Cases</Heading>
            <BackgroundColor color="vs-grey-200">
              <Wrapper padding={[2, 2, 1, 2]}>
                <Text size={0} font="helvetica" color="vs-black">
                  Sample black, helvetica text in size 0.
                </Text>
              </Wrapper>
            </BackgroundColor>
            <Code>
              {`
<Text
  size={0}
  font="helvetica"
  color="vs-black"
>
  Sample black, helvetica text in size 0.
</Text>
            `}
            </Code>
            <BackgroundColor color="vs-blue-500">
              <Wrapper padding={[2, 2, 2, 2]}>
                <Text
                  size={12}
                  font="helvetica"
                  color="vs-white"
                  style={{ fontWeight: 'bold' }}
                >
                  Bold, white, helvetica text in size 12.
                </Text>
              </Wrapper>
            </BackgroundColor>
            <Code>
              {`
<Text
  size={12}
  font="helvetica"
  color="vs-white"
  style={{ fontWeight: 'bold' }}
>
  Bold, white, helvetica text in size 12.
</Text>
            `}
            </Code>
            <BackgroundColor color="vs-purple-500">
              <Wrapper padding={[8, 2, 8, 2]}>
                <Text
                  size={14}
                  font="helvetica"
                  color="vs-purple-300"
                  style={{ fontWeight: 'bold' }}
                >
                  Something
                </Text>
                <Text
                  size={14}
                  font="helvetica"
                  color="vs-white"
                  style={{ fontWeight: 'bold' }}
                >
                  Profound
                </Text>
              </Wrapper>
            </BackgroundColor>
            <Code>
              {`
<Text
  size={14}
  font="helvetica"
  color="vs-purple-300"
  style={{ fontWeight: 'bold' }}
>
  Something
</Text>
<Text
  size={14}
  font="helvetica"
  color="vs-white"
  style={{ fontWeight: 'bold' }}
>
  Profound
</Text>
            `}
            </Code>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  </Page>
);
