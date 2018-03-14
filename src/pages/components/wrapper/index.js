const React = require('react');
const Page = require('../../../templates/Page');
const Hero = require('../../../components/Hero');
const { Grid } = require('verious-react/components/Grid/Grid');
const { Row } = require('verious-react/components/Row/Row');
const { Column } = require('verious-react/components/Column/Column');
const Angle = require('../../../../react/components/Angle');
const Flex = require('../../../../react/components/Flex');
const Square = require('../../../../react/components/Square');
const { Container } = require('verious-react/components/Container/Container');
const Shadow = require('../../../../react/components/Shadow');

module.exports = () => (
  <Page>
    <Hero title="Container" subtitle="Documentation for wrapper." />
    <Grid>
      <Row>
        <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
          <Flex
            justifyContent="center"
            alignItems="center"
            style={{
              width: '100%'
            }}
          >
            <Angle
              backgroundColor="vs-pink-500"
              angleColor="vs-white"
              width={160}
              height={24}
              leftPosition={0}
              rightPosition={24}
            />
          </Flex>
        </Column>
      </Row>
      <Row>
        <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
          <Container pull={[24, 0, 0, 0]} backgroundColor="vs-white">
            <Shadow depth={5}>
              <Square size={24} />
            </Shadow>
          </Container>
        </Column>
      </Row>
      <Square size={12} />
      <Row>
        <Column span={[6, 8, 8, 8]} push={[0, 0, 0, 0]}>
          <Container backgroundColor="vs-white">
            <Shadow depth={5}>
              <Square size={12} />
            </Shadow>
          </Container>
        </Column>
      </Row>
      <Row>
        <Column span={[6, 8, 12, 12]} push={[0, 4, 4, 4]}>
          <Container backgroundColor="vs-white" pull={[6, 0, 0, 0]}>
            <Shadow depth={5}>
              <Square size={12} />
            </Shadow>
          </Container>
        </Column>
      </Row>
      <Square size={12} />
    </Grid>
  </Page>
);
