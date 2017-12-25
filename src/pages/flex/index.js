const React = require('react');
const Page = require('../../templates/Page');
const Hero = require('../../components/Hero');
const Wrapper = require('../../../react/components/Wrapper');
const Container = require('../../../react/components/Container');
const Row = require('../../../react/components/Row');
const Column = require('../../../react/components/Column');
const Flex = require('../../../react/components/Flex');
const Square = require('../../../react/components/Square');
const BackgroundColor = require('../../../react/components/BackgroundColor');

module.exports = () => (
  <Page>
    <Hero title="Flex" subtitle="Documentation for flex." />
    <Wrapper padding={[8, 0, 8, 0]}>
      <Container>
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
      </Container>
    </Wrapper>
  </Page>
);
