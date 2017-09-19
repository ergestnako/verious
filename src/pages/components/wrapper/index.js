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

module.exports = () =>
  (<Page>
    <Hero title="Wrapper" subtitle="Documentation for wrapper." />
    <Container>
      <Row>
        <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
          <Layout
            direction="center"
            style={{
              width: '100%',
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
              <Square size={12} />
            </Shadow>
          </Wrapper>
        </Column>
      </Row>
    </Container>
  </Page>);
