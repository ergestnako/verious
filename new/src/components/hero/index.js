const React = require('react');
const PropTypes = require('prop-types');
const Container = require('../../../react/components/Container');
const Row = require('../../../react/components/Row');
const Column = require('../../../react/components/Column');
const Heading = require('../../../react/components/Heading');
const Paragraph = require('../../../react/components/Paragraph');
const Layout = require('../../../react/components/Layout');
const Spacer = require('../../../react/components/Spacer');
const Square = require('../../../react/components/Square');

const component = ({ title, subtitle }) => (
  <div className="hero">
    <Container>
      <Row>
        <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]} >
          <Square size="10" />
          <Layout direction="horizontal">
            <Spacer />
            <div style={{ textAlign: 'center' }} >
              <Heading size="1">{ title }</Heading>
              <Paragraph>{ subtitle }</Paragraph>
            </div>
            <Spacer />
          </Layout>
          <Square size="10" />
        </Column>
      </Row>
    </Container>
  </div>
);

component.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

module.exports = component;
