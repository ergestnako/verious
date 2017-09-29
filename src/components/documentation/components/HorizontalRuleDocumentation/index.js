const React = require('react');
const Container = require('../../../../../react/components/Container');
const Row = require('../../../../../react/components/Row');
const Column = require('../../../../../react/components/Column');
const Heading = require('../../../../../react/components/Heading');
// const Paragraph = require('../../../../../react/components/Paragraph');
// const Code = require('../../../../../react/components/Code');
const HorizontalRule = require('../../../../../react/components/HorizontalRule');
const Square = require('../../../../../react/components/Square');

module.exports = () => (
  <div>
    <Square size="4" />

    <Container>
      <Row>
        <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
          <Heading size="2">Usage</Heading>
        </Column>
        <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
          <HorizontalRule backgroundColor="red" lineColor="blue" height={8} />
          <HorizontalRule
            backgroundColor="vs-grey-100"
            lineColor="vs-blue-500"
            height={1}
          />
        </Column>
      </Row>
    </Container>
  </div>
);
