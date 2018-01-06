const React = require('react');
const PropTypes = require('prop-types');
const Container = require('../../../react/components/Container');
const Row = require('../../../react/components/Row');
const Column = require('../../../react/components/Column');
const Text = require('../../../react/components/Text');
const Paragraph = require('../../../react/components/Paragraph');
const Wrapper = require('../../../react/components/Wrapper');
const BackgroundImage = require('../../../react/components/BackgroundImage');

const component = ({ source, title, subtitle }) => (
  <Wrapper backgroundColor="vs-pink-500">
    <BackgroundImage source={source}>
      <Wrapper padding={[12, 0, 12, 0]}>
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
              {subtitle && <Paragraph textColor="vs-white">{subtitle}</Paragraph>}
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
  subtitle: PropTypes.string.isRequired
};

module.exports = component;
