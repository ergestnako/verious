const React = require('react');
const PropTypes = require('prop-types');
const Container = require('../../../react/components/Container');
const Row = require('../../../react/components/Row');
const Column = require('../../../react/components/Column');
const Heading = require('../../../react/components/Heading');
const Paragraph = require('../../../react/components/Paragraph');
const Layout = require('../../../react/components/Layout');
const Spacer = require('../../../react/components/Spacer');
const Wrapper = require('../../../react/components/Wrapper');
const BackgroundImage = require('../../../react/components/BackgroundImage');

const component = ({ source, title, subtitle }) => (
  <Wrapper backgroundColor="vs-pink-500">
    <BackgroundImage source={source}>
      <Wrapper backgroundColor="rgba(0,0,0,0.5)" padding={[12, 0, 12, 0]}>
        <Container>
          <Row>
            <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]} >
              <Layout direction="horizontal">
                <Spacer />
                <div style={{ textAlign: 'center' }} >
                  <Heading size="1" textColor="vs-white">{title}</Heading>
                  <Paragraph textColor="vs-white">{subtitle}</Paragraph>
                </div>
                <Spacer />
              </Layout>
            </Column>
          </Row>
        </Container>
      </Wrapper>
    </BackgroundImage>
  </Wrapper>
);

component.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

module.exports = component;
