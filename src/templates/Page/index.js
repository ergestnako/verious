import React from "react";
import Link from "gatsby-link";
import "verious-styles/css/verious-styles.css";
import Container from "@verious/vs-container";
import Grid from "@verious/vs-grid";
import Row from "@verious/vs-row";
import Column from "@verious/vs-column";
import List from "@verious/vs-list";
import ListItem from "@verious/vs-list-item";
import Flex from "@verious/vs-flex";
import "../../../scss/styles.scss";
import Navigation from "../../../react/components/Navigation";
import Footer from "../../components/Footer";
import Logo from "../../components/Logo";
import Utilities from "../../../react/utilities";
import Head from "../../components/Head";

const PRIMARY_TEXT_COLOR = "black";
const SECONDARY_TEXT_COLOR = "grey-400";

export default ({ children }) => (
  <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
    <Head title="Verious" />
    <Navigation
      backgroundColor="white"
      textColor="cyan-a400"
      iconColor="cyan-a700"
      left={
        <Flex direction="column" justifyContent="center">
          <Logo
            size={4}
            circleColor={Utilities.getInternalColor("vs-cyan-a400")}
            overlayColor={Utilities.getInternalColor("vs-black")}
          />
        </Flex>
      }>
      <Container padding={[2, 0, 2, 0]}>
        <Grid>
          <Row>
            <Column span={[12, 12, 12, 12, 12]}>
              <List unstyled>
                <ListItem textColor={SECONDARY_TEXT_COLOR}>
                  Quick Start
                </ListItem>
                <ListItem textColor={PRIMARY_TEXT_COLOR}>
                  <Link to="/blog/getting-started/">Installation</Link>
                </ListItem>
                <ListItem textColor={PRIMARY_TEXT_COLOR}>
                  <Link to="/blog/develop-and-deploy/">Develop and Deploy</Link>
                </ListItem>
                <ListItem textColor={PRIMARY_TEXT_COLOR}>
                  <Link to="/blog/directory-structure/">
                    Directory Structure
                  </Link>
                </ListItem>
                <ListItem textColor={SECONDARY_TEXT_COLOR}>Traits</ListItem>
                <ListItem textColor={PRIMARY_TEXT_COLOR}>
                  <Link to="/traits/color/" href="/traits/color/">
                    Color
                  </Link>
                </ListItem>
              </List>
              <List unstyled>
                <ListItem textColor={PRIMARY_TEXT_COLOR}>
                  <a href="https://github.com/cpinnix/verious">Github</a>
                </ListItem>
              </List>
            </Column>
          </Row>
        </Grid>
      </Container>
    </Navigation>
    {children}
    <Footer />
  </div>
);
