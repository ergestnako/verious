import React from 'react';
import { Container } from 'verious-react/components/Container/Container';
import { Grid } from 'verious-react/components/Grid/Grid';
import { Row } from 'verious-react/components/Row/Row';
import { Column } from 'verious-react/components/Column/Column';
import { Paragraph } from 'verious-react/components/Paragraph/Paragraph';
import { BackgroundColor } from 'verious-react/components/BackgroundColor/BackgroundColor';
import HorizontalRule from '../../../react/components/HorizontalRule';
import Utilities from '../../../react/utilities';
import Logo from '../Logo';

module.exports = () => (
  <BackgroundColor color="vs-white">
    <HorizontalRule lineColor="vs-grey-300" height={4} />
    <Container padding={[4, 0, 4, 0]}>
      <Grid>
        <Row>
          <Column span={[12, 12, 12, 12, 12]}>
            <Logo
              size={4}
              circleColor={Utilities.getInternalColor('vs-cyan-a400')}
              overlayColor={Utilities.getInternalColor('vs-black')}
            />
            <Container height={4} />
            <Paragraph textColor="vs-black">
              This site is generated with{' '}
              <a href="https://www.gatsbyjs.org/">Gatsby</a> and built with love
              in Washington, DC.
            </Paragraph>
          </Column>
        </Row>
      </Grid>
    </Container>
  </BackgroundColor>
);
