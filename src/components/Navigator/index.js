import React from "react";
import Link from "gatsby-link";
import Container from "@verious/vs-container";
import Flex from "@verious/vs-flex";
import Spacer from "@verious/vs-spacer";
import Paragraph from "@verious/vs-paragraph";

export default ({ nextLink, nextLabel, previousLink, previousLabel }) => (
  <Container>
    <Flex>
      {previousLink && previousLabel && (
        <div>
          <Paragraph>Previous</Paragraph>
          <Paragraph>
            <Link to={previousLink}>{previousLabel}</Link>
          </Paragraph>
        </div>
      )}
      <Spacer />
      {nextLink && nextLabel && (
        <div>
          <Paragraph style={{ textAlign: "right" }}>Next</Paragraph>
          <Paragraph>
            <Link to={nextLink}>{nextLabel}</Link>
          </Paragraph>
        </div>
      )}
    </Flex>
  </Container>
);
