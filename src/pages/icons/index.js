const React = require('react');
const Page = require('../../templates/Page');
const Hero = require('../../components/Hero');
const Wrapper = require('../../../react/components/Wrapper');
const Container = require('../../../react/components/Container');
const Row = require('../../../react/components/Row');
const Column = require('../../../react/components/Column');
const IconMenu = require('../../../react/components/IconMenu');
const IconWrapper = require('../../../react/components/IconWrapper');

module.exports = () => (
  <Page>
    <Hero title="Icons" subtitle="Documentation for icons." />
    <Wrapper padding={[8, 0, 8, 0]}>
      <Container>
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
      </Container>
    </Wrapper>
  </Page>
);
