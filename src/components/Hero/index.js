const React = require('react');
const PropTypes = require('prop-types');
const Container = require('../../../react/components/Container');
const Row = require('../../../react/components/Row');
const Column = require('../../../react/components/Column');
const Paragraph = require('../../../react/components/Paragraph');
const Text = require('../../../react/components/Text');
const Wrapper = require('../../../react/components/Wrapper');
const BackgroundColor = require('../../../react/components/BackgroundColor');
const HorizontalRule = require('../../../react/components/HorizontalRule');

const component = ({ title, subtitle }) => (
  <BackgroundColor color="vs-white">
    <Wrapper padding={[12, 0, 8, 0]}>
      <Container>
        <Row>
          <Column span={[12, 12, 12, 12, 12]}>
            <Text
              tag="h1"
              size={16}
              font="helvetica"
              color="vs-cyan-a400"
              style={{ fontWeight: '700', letterSpacing: -6, marginLeft: -8 }}
            >
              {title}
            </Text>
            {subtitle && (
              <Paragraph textColor="vs-grey-500">{subtitle}</Paragraph>
            )}
          </Column>
        </Row>
      </Container>
    </Wrapper>
    <HorizontalRule lineColor="vs-grey-300" height={4} />
  </BackgroundColor>
);

component.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

module.exports = component;
