const React = require('react');
const Image = require('../../components/Image');
const Wrapper = require('../../components/Wrapper');
const Container = require('../../components/Container');
const Row = require('../../components/Row');
const Column = require('../../components/Column');

module.exports = ({ source, caption }) => (
  <Wrapper padding={[4, 0, 4, 0]}>
    <Container>
      <Row>
        <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
          <Image source={source} />
        </Column>
      </Row>
    </Container>
  </Wrapper>
);
