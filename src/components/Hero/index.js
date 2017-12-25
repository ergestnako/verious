const React = require('react');
const PropTypes = require('prop-types');
const Container = require('../../../react/components/Container');
const Row = require('../../../react/components/Row');
const Column = require('../../../react/components/Column');
const Paragraph = require('../../../react/components/Paragraph');
const Text = require('../../../react/components/Text');
const Wrapper = require('../../../react/components/Wrapper');
const BackgroundColor = require('../../../react/components/BackgroundColor');

const component = ({ title, subtitle }) => (
  <BackgroundColor color="vs-pink-500">
    <Wrapper backgroundColor="vs-pink-500" padding={[12, 0, 12, 0]}>
      <Container>
        <Row>
          <Column span={[12, 12, 12, 12, 12]}>
            <Text
              tag="h1"
              size={16}
              font="helvetica"
              color="vs-white"
              style={{ fontWeight: 'bold', letterSpacing: -4, marginLeft: -8 }}
            >
              {title}
            </Text>
            <Paragraph textColor="vs-white">{subtitle}</Paragraph>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  </BackgroundColor>
);

component.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

module.exports = component;
