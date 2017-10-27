const React = require('react');
const Page = require('../../templates/Page');
const Hero = require('../../components/Hero');
const Wrapper = require('../../../react/components/Wrapper');
const Container = require('../../../react/components/Container');
const Row = require('../../../react/components/Row');
const Column = require('../../../react/components/Column');
const Button = require('../../../react/components/Button');
const HorizontalRule = require('../../../react/components/HorizontalRule');
const VerticalRule = require('../../../react/components/VerticalRule');
const Square = require('../../../react/components/Square');
const Paragraph = require('../../../react/components/Paragraph');
const Image = require('../../../react/components/Image');
const Circle = require('../../../react/components/Circle');
const Code = require('../../../react/components/Code');

module.exports = () => (
  <Page>
    <Hero title="Atoms" subtitle="Documentation for atoms." />
    <Wrapper padding={[8, 0, 8, 0]}>
      <Container>
        <Row>
          <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
            <Paragraph>Button</Paragraph>
            <Button
              backgroundColor="vs-pink-500"
              textColor="vs-white"
              label="Button"
            />
            <Square size={2} />
            <Paragraph>HorizontalRule</Paragraph>
            <HorizontalRule
              height={3}
              backgroundColor="vs-grey-100"
              lineColor="vs-grey-400"
            />
            <Paragraph>Vertical Rule</Paragraph>
            <VerticalRule height={3} lineColor="vs-grey-400" />
            <Paragraph>Square</Paragraph>
            <Code>
              {`
import React from 'react';
import Square from 'verious/dist/react/components/Square';

module.exports = () => <Square size={3} backgroundColor="vs-blue-500" />;
              `}
            </Code>
            <Square size={3} backgroundColor="vs-blue-500" />
            <Square size={2} />
            <Code>
              {`
import React from 'react';
import Square from 'verious/dist/react/components/Square';

module.exports = () => <Square size={[2, 4, 6, 8]} backgroundColor="vs-blue-500" />;
              `}
            </Code>
            <Square size={[2, 4, 6, 8]} backgroundColor="vs-blue-500" />
            <Square size={2} />
            <Paragraph>Rectangle</Paragraph>
            <Paragraph>Angle</Paragraph>
            <Paragraph>Image</Paragraph>
            <Code>
              {`
import React from 'react';
import Image from 'verious/dist/react/components/Image';

module.exports = () => <Image source="https://bigcatrescue.org/wp-content/uploads/2011/05/Peaches.jpg"/>
              `}
            </Code>
            <Image source="https://bigcatrescue.org/wp-content/uploads/2011/05/Peaches.jpg" />
            <Square size={2} />
            <Code>
              {`
import React from 'react';
import Image from 'verious/dist/react/components/Image';

module.exports = () =>
  <Image
    source={[
      'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg',
      'https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg',
      'https://www.petfinder.com/wp-content/uploads/2012/11/152177319-declawing-cats-632x475-e1354303246526-632x353.jpg',
      'https://www.petfinder.com/wp-content/uploads/2012/11/92259289-coping-allergies-pets-632x475.jpg'
    ]}
  />;
              `}
            </Code>
            <Image
              source={[
                'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg',
                'https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg',
                'https://www.petfinder.com/wp-content/uploads/2012/11/152177319-declawing-cats-632x475-e1354303246526-632x353.jpg',
                'https://www.petfinder.com/wp-content/uploads/2012/11/92259289-coping-allergies-pets-632x475.jpg'
              ]}
            />
            <Paragraph>Dropdown</Paragraph>
            <Paragraph>Blockquote</Paragraph>
            <Paragraph>Presentation</Paragraph>
            <Paragraph>HorizontalScroll</Paragraph>
            <Paragraph>Circle</Paragraph>
            <Circle size={2} backgroundColor="vs-black" />
          </Column>
        </Row>
      </Container>
    </Wrapper>
  </Page>
);
