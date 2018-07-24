import React from "react";
import PropTypes from "prop-types";
import Container from "@verious/vs-container";
import Grid from "@verious/vs-grid";
import Row from "@verious/vs-row";
import Column from "@verious/vs-column";
import Heading from "@verious/vs-heading";
import Paragraph from "@verious/vs-paragraph";
import BackgroundColor from "@verious/vs-background-color";
import HorizontalRule from "../../../react/components/HorizontalRule";

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
