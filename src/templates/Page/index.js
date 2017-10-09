import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import 'animate.css/animate.css';
import '../../scss/styles.scss';
import Navigation from '../../../react/components/Navigation';
import List from '../../../react/components/List';
import ListItem from '../../../react/components/ListItem';
import Footer from '../../components/Footer';
import Baseline from '../../../react/components/Baseline';
import Layout from '../../../react/components/Layout';
import Spacer from '../../../react/components/Spacer';
import Logo from '../../img/vs-logo.png';
import Dropdown from '../../../react/components/Dropdown';

export default ({ children }) => (
  <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
    <Helmet>
      <title>Verious</title>
    </Helmet>
    <Navigation
      backgroundColor="vs-pink-700"
      textColor="vs-white"
      left={
        <Layout direction="vertical">
          <Spacer />
          <Link to="/">
            <img src={Logo} style={{ height: '1.5rem' }} alt="logo" />
          </Link>
          <Spacer />
        </Layout>
      }
    >
      <List unstyled>
        <Dropdown
          button={<ListItem textColor="vs-pink-200">Getting Started</ListItem>}
        >
          <List unstyled>
            <ListItem textColor="vs-white">
              <Link to="/blog/getting-started/">Getting Started</Link>
            </ListItem>
            <ListItem textColor="vs-white">
              <Link to="/blog/develop-and-deploy/">Develop and Deploy</Link>
            </ListItem>
            <ListItem textColor="vs-white">
              <Link to="/blog/directory-structure/">Directory Structure</Link>
            </ListItem>
          </List>
        </Dropdown>
        <Dropdown
          button={<ListItem textColor="vs-pink-200">Documentation</ListItem>}
        >
          <List unstyled>
            <ListItem textColor="vs-white">
              <Link to="/color/">Color</Link>
            </ListItem>
            <ListItem textColor="vs-white">
              <Link to="/layout/">Layout</Link>
            </ListItem>
            <ListItem textColor="vs-white">
              <Link to="/style/">Style</Link>
            </ListItem>
            <ListItem textColor="vs-white">
              <Link to="/typography/">Typography</Link>
            </ListItem>
            <ListItem textColor="vs-white">
              <Link to="/components/">Components</Link>
            </ListItem>
            <ListItem textColor="vs-white">
              <Link to="/blocks/">Blocks</Link>
            </ListItem>
            <ListItem textColor="vs-white">
              <Link to="/interactions/">Interactions</Link>
            </ListItem>
          </List>
        </Dropdown>
        <ListItem textColor="vs-white">
          <a href="https://github.com/cpinnix/verious">Github</a>
        </ListItem>
      </List>
    </Navigation>
    {children}
    <Footer />
    <Baseline />
  </div>
);
