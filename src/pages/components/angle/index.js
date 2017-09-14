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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Angle
              backgroundColor="vs-grey-100"
              angleColor="vs-grey-500"
              width={160}
              height={24}
              leftPosition={0}
              rightPosition={24}
            />
          </div>
        </Column>
      </Row>
    </Container>
  </Page>);
