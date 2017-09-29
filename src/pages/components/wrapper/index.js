const React = require('react');
const Page = require('../../../templates/Page');
const Hero = require('../../../components/Hero');
const Container = require('../../../../react/components/Container');
const Row = require('../../../../react/components/Row');
const Column = require('../../../../react/components/Column');
const Angle = require('../../../../react/components/Angle');
const Layout = require('../../../../react/components/Layout');
const Square = require('../../../../react/components/Square');
const Wrapper = require('../../../../react/components/Wrapper');
const Shadow = require('../../../../react/components/Shadow');

module.exports = () => (
  <Page>
    <Hero title="Wrapper" subtitle="Documentation for wrapper." />
    <Container>
      <Row>
        <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
          <Layout
            direction="center"
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
          </Layout>
        </Column>
      </Row>
      <Row>
        <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
          <Wrapper pull={[24, 0, 0, 0]} backgroundColor="vs-white">
            <Shadow depth={5}>
              <Square size={24} />
            </Shadow>
          </Wrapper>
        </Column>
      </Row>
      <Square size={12} />
      <Row>
        <Column span={[6, 8, 8, 8]} push={[0, 0, 0, 0]}>
          <Wrapper backgroundColor="vs-white">
            <Shadow depth={5}>
              <Square size={12} />
            </Shadow>
          </Wrapper>
        </Column>
      </Row>
      <Row>
        <Column span={[6, 8, 12, 12]} push={[0, 4, 4, 4]}>
          <Wrapper backgroundColor="vs-white" pull={[6, 0, 0, 0]}>
            <Shadow depth={5}>
              <Square size={12} />
            </Shadow>
          </Wrapper>
        </Column>
      </Row>
      <Square size={12} />
    </Container>
  </Page>
);
