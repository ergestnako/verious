const React = require('react');
const Wrapper = require('../../../../../react/components/Wrapper');
const Container = require('../../../../../react/components/Container');
const Row = require('../../../../../react/components/Row');
const Column = require('../../../../../react/components/Column');
const Heading = require('../../../../../react/components/Heading');
// const Paragraph = require('../../../../../react/components/Paragraph');
// const Code = require('../../../../../react/components/Code');
const HorizontalScroll = require('../../../../../react/components/HorizontalScroll');
const HorizontalScrollItem = require('../../../../../react/components/HorizontalScrollItem');
const Shadow = require('../../../../../react/components/Shadow');
const Square = require('../../../../../react/components/Square');

module.exports = () =>
  (<div>
    <Square size={8} />

    <Container>
      <Row>
        <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
          <Heading size="2">Usage</Heading>
        </Column>
      </Row>
    </Container>

    <HorizontalScroll>
      <HorizontalScrollItem>
        <Wrapper padding={[1, 1, 1, 1]}>
          <Shadow depth={1}>
            <div style={{ width: 320, height: 568 }} />
          </Shadow>
        </Wrapper>
      </HorizontalScrollItem>
      <HorizontalScrollItem>
        <Wrapper padding={[1, 1, 1, 1]}>
          <Shadow depth={1}>
            <div style={{ width: 320, height: 568 }} />
          </Shadow>
        </Wrapper>
      </HorizontalScrollItem>
      <HorizontalScrollItem>
        <Wrapper padding={[1, 1, 1, 1]}>
          <Shadow depth={1}>
            <div style={{ width: 320, height: 568 }} />
          </Shadow>
        </Wrapper>
      </HorizontalScrollItem>
      <HorizontalScrollItem>
        <Wrapper padding={[1, 1, 1, 1]}>
          <Shadow depth={1}>
            <div style={{ width: 320, height: 568 }} />
          </Shadow>
        </Wrapper>
      </HorizontalScrollItem>
      <HorizontalScrollItem>
        <Wrapper padding={[1, 1, 1, 1]}>
          <Shadow depth={1}>
            <div style={{ width: 320, height: 568 }} />
          </Shadow>
        </Wrapper>
      </HorizontalScrollItem>
      <HorizontalScrollItem>
        <Wrapper padding={[1, 1, 1, 1]}>
          <Shadow depth={1}>
            <div style={{ width: 320, height: 568 }} />
          </Shadow>
        </Wrapper>
      </HorizontalScrollItem>
      <HorizontalScrollItem>
        <Wrapper padding={[1, 1, 1, 1]}>
          <Shadow depth={1}>
            <div style={{ width: 320, height: 568 }} />
          </Shadow>
        </Wrapper>
      </HorizontalScrollItem>
      <HorizontalScrollItem>
        <Wrapper padding={[1, 1, 1, 1]}>
          <Shadow depth={1}>
            <div style={{ width: 320, height: 568 }} />
          </Shadow>
        </Wrapper>
      </HorizontalScrollItem>
    </HorizontalScroll>
  </div>);
