const React = require('react');
const Page = require('../../templates/Page');
const Hero = require('../../components/Hero');
const { Container } = require('verious-react/components/Container/Container');
const { Grid } = require('verious-react/components/Grid/Grid');
const { Row } = require('verious-react/components/Row/Row');
const { Column } = require('verious-react/components/Column/Column');
const Flex = require('../../../react/components/Flex');
const Square = require('../../../react/components/Square');
const BackgroundColor = require('../../../react/components/BackgroundColor');

module.exports = () => (
  <Page>
    <Hero title="Flex" subtitle="Documentation for flex." />
    <Container padding={[8, 0, 8, 0]}>
      <Grid>
        <Row>
          <Column span={[12, 12, 12, 12, 12]}>
            <BackgroundColor color="vs-grey-500">
              <Flex flex direction="row" justifyContent="center">
                <Square size="3" backgroundColor="vs-pink-500" />
                <Square size="3" backgroundColor="vs-pink-500" />
                <Square size="3" backgroundColor="vs-pink-500" />
              </Flex>
            </BackgroundColor>
            <Square size="3" />
            <BackgroundColor color="vs-grey-500">
              <Flex
                flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{ height: '9rem' }}
              >
                <Square size="3" backgroundColor="vs-pink-500" />
                <Square size="3" backgroundColor="vs-pink-500" />
                <Square size="3" backgroundColor="vs-pink-500" />
              </Flex>
            </BackgroundColor>
          </Column>
        </Row>
      </Grid>
    </Container>
  </Page>
);
