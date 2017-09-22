const React = require('react');
const Page = require('../../templates/Page');
const Hero = require('../../components/Hero');
const Wrapper = require('../../../react/components/Wrapper');
const Container = require('../../../react/components/Container');
const Row = require('../../../react/components/Row');
const Column = require('../../../react/components/Column');
const Button = require('../../../react/components/Button');

module.exports = () => (
  <Page>
    <Hero
      title="Atoms"
      subtitle="Documentation for atoms."
    />
    <Wrapper padding={[8, 0, 8, 0]}>
      <Container>
        <Row>
          <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
            <Button
              backgroundColor="vs-pink-500"
              textColor="vs-white"
              label="Button"
            />
          </Column>
        </Row>
      </Container>
    </Wrapper>
  </Page>
);
