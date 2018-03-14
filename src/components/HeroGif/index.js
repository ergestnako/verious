const React = require('react');
const PropTypes = require('prop-types');
const { Grid } = require('verious-react/components/Grid/Grid');
const { Row } = require('verious-react/components/Row/Row');
const { Column } = require('verious-react/components/Column/Column');
const Text = require('../../../react/components/Text');
const { Paragraph } = require('verious-react/components/Paragraph/Paragraph');
const { Container } = require('verious-react/components/Container/Container');
const BackgroundImage = require('../../../react/components/BackgroundImage');

const component = ({ source, title, subtitle }) => (
  <Container backgroundColor="vs-cyan-a400">
    <BackgroundImage source={source}>
      <Container padding={[12, 0, 12, 0]}>
        <Container>
          <Row>
            <Column span={[12, 12, 12, 12, 12]}>
              <Text
                tag="h1"
                size={16}
                font="helvetica"
                color="vs-white"
                style={{ fontWeight: '700', letterSpacing: -6, marginLeft: -8 }}
              >
                {title}
              </Text>
              {subtitle && (
                <Paragraph textColor="vs-white">{subtitle}</Paragraph>
              )}
            </Column>
          </Row>
        </Container>
      </Container>
    </BackgroundImage>
  </Container>
);

component.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

module.exports = component;
