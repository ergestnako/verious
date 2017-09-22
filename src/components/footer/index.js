const React = require('react');
const Wrapper = require('../../../react/components/Wrapper');
const Container = require('../../../react/components/Container');
const Row = require('../../../react/components/Row');
const Column = require('../../../react/components/Column');
const Paragraph = require('../../../react/components/Paragraph');
const BackgroundColor = require('../../../react/components/BackgroundColor');

module.exports = () => (
  <BackgroundColor color="vs-grey-900">
    <Wrapper padding={[4, 0, 2, 0]}>
      <Container>
        <Row>
          <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
            <Paragraph textColor="vs-white">This site is generated with <a href="https://www.gatsbyjs.org/">Gatsby</a> and built with love in Washington, DC.</Paragraph>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  </BackgroundColor>
);
