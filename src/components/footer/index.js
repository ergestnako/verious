const React = require('react');
const Wrapper = require('../../../react/components/Wrapper');
const Container = require('../../../react/components/Container');
const Row = require('../../../react/components/Row');
const Column = require('../../../react/components/Column');
const Paragraph = require('../../../react/components/Paragraph');
const BackgroundColor = require('../../../react/components/BackgroundColor');
const HorizontalRule = require('../../../react/components/HorizontalRule');
const Square = require('../../../react/components/Square');
const Utilities = require('../../../react/utilities');
const Logo = require('../Logo');

module.exports = () => (
  <BackgroundColor color="vs-white">
    <HorizontalRule lineColor="vs-grey-300" height={4} />
    <Wrapper padding={[4, 0, 4, 0]}>
      <Container>
        <Row>
          <Column span={[12, 12, 12, 12, 12]}>
            <Logo
              size={4}
              circleColor={Utilities.getInternalColor('vs-cyan-a400')}
              overlayColor={Utilities.getInternalColor('vs-black')}
            />
            <Square size={4} />
            <Paragraph textColor="vs-black">
              This site is generated with{' '}
              <a href="https://www.gatsbyjs.org/">Gatsby</a> and built with love
              in Washington, DC.
            </Paragraph>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  </BackgroundColor>
);
