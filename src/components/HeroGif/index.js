import React from "react";
import PropTypes from "prop-types";
import Container from "@verious/vs-container";
import Grid from "@verious/vs-grid";
import Row from "@verious/vs-row";
import Column from "@verious/vs-column";
import Heading from "@verious/vs-heading";
import Paragraph from "@verious/vs-paragraph";
import Flex from "@verious/vs-flex";
import BackgroundImage from "../../../react/components/BackgroundImage";

const component = ({ source, title, subtitle }) => (
  <Container backgroundColor="vs-cyan-a400">
    <BackgroundImage source={source}>
      <Container padding={[12, 0, 12, 0]}>
        <Grid>
          <Row>
            <Column span={[12, 12, 12, 12, 12]}>
              <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Heading size={1} textColor="white">
                  {title}
                </Heading>
                {subtitle && (
                  <Paragraph textColor="white">{subtitle}</Paragraph>
                )}
              </Flex>
            </Column>
          </Row>
        </Grid>
      </Container>
    </BackgroundImage>
  </Container>
);

component.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default component;
