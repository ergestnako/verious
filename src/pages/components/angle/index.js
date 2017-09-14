const React = require('react');
const Page = require('../../../templates/Page');
const Hero = require('../../../components/Hero');
const Container = require('../../../../react/components/Container');
const Row = require('../../../../react/components/Row');
const Column = require('../../../../react/components/Column');
const Angle = require('../../../../react/components/Angle');

module.exports = () =>
  (<Page>
    <Hero title="Angle" subtitle="Documentation for angle." />
    <Container>
      <Row>
        <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
          <Angle
            backgroundColor="vs-grey-100"
            angleColor="vs-grey-500"
            width={48}
            height={48}
            leftPosition={4}
            rightPosition={12}
          />
        </Column>
      </Row>
    </Container>
  </Page>);
