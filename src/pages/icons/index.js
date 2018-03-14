const React = require('react');
const Page = require('../../templates/Page');
const Hero = require('../../components/Hero');
const { Container } = require('verious-react/components/Container/Container');
const { Grid } = require('verious-react/components/Grid/Grid');
const { Row } = require('verious-react/components/Row/Row');
const { Column } = require('verious-react/components/Column/Column');
const IconMenu = require('../../../react/components/IconMenu');
const IconWrapper = require('../../../react/components/IconWrapper');

module.exports = () => (
  <Page>
    <Hero title="Icons" subtitle="Documentation for icons." />
    <Container padding={[8, 0, 8, 0]}>
      <Grid>
        <Row>
          <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
            <IconWrapper>
              <IconMenu backgroundColor="vs-white" iconColor="vs-black" />
            </IconWrapper>
            <IconWrapper>
              <IconMenu
                backgroundColor="vs-white"
                iconColor="vs-black"
                mode="cross"
              />
            </IconWrapper>
          </Column>
        </Row>
      </Grid>
    </Container>
  </Page>
);
