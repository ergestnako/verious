const React = require('react');
const Link = require('gatsby-link').default;
const { Container } = require('verious-react/components/Container/Container');
const Flex = require('../../../react/components/Flex');
const Spacer = require('../../../react/components/Spacer');
const Paragraph = require('../../../react/components/Paragraph');

module.exports = ({ nextLink, nextLabel, previousLink, previousLabel }) => (
  <Container>
    <Flex>
      {previousLink &&
        previousLabel && (
          <div>
            <Paragraph>Previous</Paragraph>
            <Paragraph>
              <Link to={previousLink}>{previousLabel}</Link>
            </Paragraph>
          </div>
        )}
      <Spacer />
      {nextLink &&
        nextLabel && (
          <div>
            <Paragraph style={{ textAlign: 'right' }}>Next</Paragraph>
            <Paragraph>
              <Link to={nextLink}>{nextLabel}</Link>
            </Paragraph>
          </div>
        )}
    </Flex>
  </Container>
);
