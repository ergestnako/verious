const React = require('react');
const Wrapper = require('../../../../../react/components/Wrapper');
const Container = require('../../../../../react/components/Container');
const Row = require('../../../../../react/components/Row');
const Column = require('../../../../../react/components/Column');
const ImageLeft = require('../../../../../react/blocks/ImageLeft');
const Code = require('../../../../../react/components/Code');
const Heading = require('../../../../../react/components/Heading');

module.exports = ({ caption }) => (
  <Wrapper padding={[4, 0, 4, 0]}>
    <Container>
      <Row>
        <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
          <Heading size="1">ImageLeft</Heading>
          <Heading size="3">React</Heading>
          <Code>
            {`
<ImageLeft
  source="https://s3.amazonaws.com/cpinnix/site/img/2017_01_28_15_11_08_1024.jpg"
  caption="Pinnix, Charles. 2017_01_28_15_11_08. 2017. Washington, DC."
/>
            `}
          </Code>
        </Column>
      </Row>
    </Container>
    <div className="image-center-component">
      <ImageLeft
        source="https://s3.amazonaws.com/cpinnix/site/img/2017_01_28_15_10_34_1024.jpg"
        caption="Pinnix, Charles. 2017_01_28_15_11_08. 2017. Washington, DC."
      />
    </div>
  </Wrapper>
);
