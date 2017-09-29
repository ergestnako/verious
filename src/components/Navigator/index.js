const React = require('react');
const Link = require('gatsby-link').default;
const Wrapper = require('../../../react/components/Wrapper');
const Layout = require('../../../react/components/Layout');
const Spacer = require('../../../react/components/Spacer');
const Paragraph = require('../../../react/components/Paragraph');

module.exports = ({ nextLink, nextLabel, previousLink, previousLabel }) => (
  <Wrapper>
    <Layout direction="horizontal">
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
    </Layout>
  </Wrapper>
);
