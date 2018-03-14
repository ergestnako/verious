const React = require('react');
const PropTypes = require('prop-types');
const { Grid } = require('verious-react/components/Grid/Grid');
const { Row } = require('verious-react/components/Row/Row');
const { Column } = require('verious-react/components/Column/Column');
const { Heading } = require('verious-react/components/Heading/Heading');
const { Paragraph } = require('verious-react/components/Paragraph/Paragraph');
const { Container } = require('verious-react/components/Container/Container');
const BackgroundImage = require('../../../react/components/BackgroundImage');

const component = ({ source, title, subtitle }) => (
  <Container backgroundColor="vs-cyan-a400">
    <BackgroundImage source={source}>
      <Container padding={[12, 0, 12, 0]}>
        <Grid>
          <Row>
            <Column span={[12, 12, 12, 12, 12]}>
              <Heading size={1} textColor="white">
                {title}
              </Heading>
              {subtitle && (
                <Paragraph textColor="vs-white">{subtitle}</Paragraph>
              )}
            </Column>
          </Row>
        </Grid>
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
