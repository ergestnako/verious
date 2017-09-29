const React = require('react');
const Container = require('../../../../../react/components/Container');
const Row = require('../../../../../react/components/Row');
const Column = require('../../../../../react/components/Column');
const Heading = require('../../../../../react/components/Heading');
// const Paragraph = require('../../../../../react/components/Paragraph');
// const Code = require('../../../../../react/components/Code');
const Shadow = require('../../../../../react/components/Shadow');
const Square = require('../../../../../react/components/Square');

module.exports = () => (
  <div>
    <Square size="4" />

    <Container>
      <Row>
        <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
          <Heading size="2">Usage</Heading>
        </Column>
        <Column span={[6, 4, 4, 4]} push={[0, 0, 0, 0]}>
          <Shadow depth="1">
            <Square size={8} />
          </Shadow>
          <Square size={4} />
        </Column>
        <Column span={[6, 4, 4, 4]} push={[0, 0, 0, 0]}>
          <Shadow depth="2">
            <Square size={8} />
          </Shadow>
          <Square size={4} />
        </Column>
        <Column span={[6, 4, 4, 4]} push={[0, 0, 0, 0]}>
          <Shadow depth="3">
            <Square size={8} />
          </Shadow>
          <Square size={4} />
        </Column>
        <Column span={[6, 4, 4, 4]} push={[0, 0, 0, 0]}>
          <Shadow depth="4">
            <Square size={8} />
          </Shadow>
          <Square size={4} />
        </Column>
        <Column span={[6, 4, 4, 4]} push={[0, 0, 0, 0]}>
          <Shadow depth="5">
            <Square size={8} />
          </Shadow>
          <Square size={4} />
        </Column>
      </Row>
    </Container>

    <Square size="4" />
  </div>
);
