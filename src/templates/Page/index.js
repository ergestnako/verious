import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import 'animate.css/animate.css';
import '../../../scss/styles.scss';
import Navigation from '../../../react/components/Navigation';
import List from '../../../react/components/List';
import ListItem from '../../../react/components/ListItem';
import Footer from '../../components/Footer';
import Baseline from '../../../react/components/Baseline';
import Square from '../../../react/components/Square';
import Wrapper from '../../../react/components/Wrapper';
import Container from '../../../react/components/Container';
import Row from '../../../react/components/Row';
import Column from '../../../react/components/Column';
import Utilities from '../../../react/utilities';
import Logo from '../../components/Logo';

const PRIMARY_TEXT_COLOR = 'vs-cyan-a700';
const SECONDARY_TEXT_COLOR = 'vs-grey-400';

export default ({ children }) => (
  <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
    <Helmet>
      <title>Verious</title>
    </Helmet>
    <Navigation
      backgroundColor="vs-white"
      textColor="vs-cyan-a400"
      iconColor="vs-cyan-a700"
      left={
        <div style={{ marginTop: '0.5rem' }}>
          <Logo
            size={2}
            circleColor={Utilities.getInternalColor('vs-cyan-a400')}
            overlayColor={Utilities.getInternalColor('vs-black')}
          />
        </div>
      }
    >
      <Wrapper padding={[2, 0, 2, 0]}>
        <Container>
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
                <ListItem textColor={SECONDARY_TEXT_COLOR}>Atoms</ListItem>
                <ListItem textColor={PRIMARY_TEXT_COLOR}>
                  <Link to="/atoms/text/" href="/atoms/text/">
                    Text
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
        </Container>
      </Wrapper>
    </Navigation>
    {children}
    <Footer />
    <Baseline />
  </div>
);
