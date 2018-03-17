import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import 'animate.css/animate.css';
import 'verious-styles/css/verious-styles.css';
import { Container } from 'verious-react/components/Container/Container';
import { Grid } from 'verious-react/components/Grid/Grid';
import { Row } from 'verious-react/components/Row/Row';
import { Column } from 'verious-react/components/Column/Column';
import { List } from 'verious-react/components/List/List';
import { ListItem } from 'verious-react/components/ListItem/ListItem';
import '../../../scss/styles.scss';
import Navigation from '../../../react/components/Navigation';
import Footer from '../../components/Footer';
import Baseline from '../../../react/components/Baseline';
import Utilities from '../../../react/utilities';
import Logo from '../../components/Logo';

const PRIMARY_TEXT_COLOR = 'black';
const SECONDARY_TEXT_COLOR = 'grey-400';

export default ({ children }) => (
  <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
    <Helmet>
      <title>Verious</title>
    </Helmet>
    <Navigation
      backgroundColor="white"
      textColor="vs-cyan-a400"
      iconColor="vs-cyan-a700"
      left={
        <div>
          <Logo
            size={3}
            circleColor={Utilities.getInternalColor('vs-cyan-a400')}
            overlayColor={Utilities.getInternalColor('vs-black')}
          />
        </div>
      }
    >
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
    <Baseline />
  </div>
);
