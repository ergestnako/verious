import React from "react";
import PropTypes from "prop-types";
import Container from "@verious/vs-container";
import Grid from "@verious/vs-grid";
import Row from "@verious/vs-row";
import Column from "@verious/vs-column";
import Heading from "@verious/vs-heading";
import BackgroundColor from "@verious/vs-background-color";
import Flex from "@verious/vs-flex";

const component = ({ title }) => (
  <BackgroundColor color="vs-white">
    <Container padding={[32, 0, 32, 0]}>
      <Grid>
        <Row>
          <Column span={[12, 12, 12, 12, 12]}>
            <Flex direction="column">
              <Heading size={1}>{title}</Heading>
            </Flex>
          </Column>
        </Row>
      </Grid>
    </Container>
  </BackgroundColor>
);

component.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default component;
