import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'verious-react/components/Container/Container';
import { Grid } from 'verious-react/components/Grid/Grid';
import { Row } from 'verious-react/components/Row/Row';
import { Column } from 'verious-react/components/Column/Column';
import { Heading } from 'verious-react/components/Heading/Heading';
import { Paragraph } from 'verious-react/components/Paragraph/Paragraph';
import { BackgroundColor } from 'verious-react/components/BackgroundColor/BackgroundColor';
import HorizontalRule from '../../../react/components/HorizontalRule';

const component = ({ title, subtitle }) => (
  <BackgroundColor color="vs-white">
    <Container padding={[12, 0, 8, 0]}>
      <Grid>
        <Row>
          <Column span={[12, 12, 12, 12, 12]}>
            <Heading size={1} textColor="cyan-a400">
              {title}
            </Heading>
            {subtitle && (
              <Paragraph textColor="vs-grey-500">{subtitle}</Paragraph>
            )}
          </Column>
        </Row>
      </Grid>
    </Container>
    <HorizontalRule lineColor="vs-grey-300" height={4} />
  </BackgroundColor>
);

component.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

module.exports = component;
