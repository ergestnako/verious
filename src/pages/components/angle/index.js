const React = require('react');
const Page = require('../../../templates/Page');
const Hero = require('../../../components/Hero');
const Container = require('../../../../react/components/Container');
const Row = require('../../../../react/components/Row');
const Column = require('../../../../react/components/Column');
const Angle = require('../../../../react/components/Angle');
const Flex = require('../../../../react/components/Flex');
const Heading = require('../../../../react/components/Heading');
const Code = require('../../../../react/components/Code');

module.exports = () => (
  <Page>
    <Hero title="Angle" subtitle="Documentation for angle." />
    <Container>
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
          <Heading size="2">Documentation</Heading>
          <Code>
            {`
const React = require('react');
const Layout = require('verious/dist/react/components/Layout');
const Angle = require('verious/dist/react/components/Angle');

module.exports = () =>
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
            `}
          </Code>
          <Flex
            justifyContent="center"
            alignItems="center"
            direction="center"
            style={{
              width: '100%'
            }}
          >
            <Angle
              backgroundColor="vs-white"
              angleColor="vs-grey-900"
              width={160}
              height={24}
              leftPosition={0}
              rightPosition={24}
            />
          </Flex>
        </Column>
      </Row>
    </Container>
  </Page>
);
