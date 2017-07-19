import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
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

export default ({ children }) =>
  <div style={{ position: 'relative' }}>
    <Helmet>
      <title>Verious</title>
    </Helmet>
    <Navigation
      backgroundColor="vs-pink-700"
      textColor="vs-white"
      left={(
        <Layout direction="vertical">
          <Spacer />
          <Link to="/">
            <img src={Logo} style={{ height: '1.5rem' }} alt="logo" />
          </Link>
          <Spacer />
        </Layout>
      )}
    >
      <List unstyled>
        <Dropdown
          button={(
            <ListItem textColor="vs-pink-200">
              Typography
            </ListItem>
          )}
          children={(
            <ListItem>
              <List unstyled>
                <ListItem textColor="vs-white">
                  <Link to="/typography/paragraph/">Paragraph</Link>
                </ListItem>
              </List>
            </ListItem>
          )}
        />
        <Dropdown
          button={(
            <ListItem textColor="vs-pink-200">
              Blocks
            </ListItem>
          )}
          children={(
            <ListItem>
              <List unstyled>
                <ListItem textColor="vs-white">
                  <Link to="/blocks/image-full-width/">ImageFullWidth</Link>
                </ListItem>
                <ListItem textColor="vs-white">
                  <Link to="/blocks/image-center/">ImageCenter</Link>
                </ListItem>
                <ListItem textColor="vs-white">
                  <Link to="/blocks/image-left/">ImageLeft</Link>
                </ListItem>
                <ListItem textColor="vs-white">
                  <Link to="/blocks/image-right/">ImageRight</Link>
                </ListItem>
              </List>
            </ListItem>
          )}
        />
        <Dropdown
          button={(
            <ListItem textColor="vs-pink-200">
              External Links
            </ListItem>
          )}
          children={(
            <ListItem>
              <List unstyled>
                <ListItem textColor="vs-white">
                  <a href="https://github.com/cpinnix/verious">Github</a>
                </ListItem>
              </List>
            </ListItem>
          )}
        />
      </List>
    </Navigation>
    {children}
    <Footer />
    <Baseline />
  </div>;
