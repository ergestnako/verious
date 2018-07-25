import React from "react";
import Helmet from "react-helmet";
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

const PRIMARY_TEXT_COLOR = "black";
const SECONDARY_TEXT_COLOR = "grey-400";

export default ({ children }) => (
  <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
    <Helmet>
      <title>Verious</title>
      <html lang="en" className="vs-html" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/img/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/img/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/img/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/img/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/img/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/img/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/img/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/img/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/img/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/img/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/img/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/img/favicon-16x16.png"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/img/ms-icon-144x144.png" />
    </Helmet>
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
