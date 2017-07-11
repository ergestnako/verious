import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import '../../scss/styles.scss';
import Navigation from '../../../react/components/Navigation';
import List from '../../../react/components/List';
import ListItem from '../../../react/components/ListItem';
import Footer from '../../components/Footer';
import Baseline from '../../../react/components/Baseline';

export default ({ children }) =>
  <div style={{ position: 'relative' }}>
    <Helmet />
    <Navigation
      backgroundColor="vs-pink-700"
      textColor="vs-white"
    >
      <List unstyled>
        <ListItem textColor="vs-pink-200">
          Typography
        </ListItem>
        <ListItem textColor="vs-white">
          <List unstyled>
            <ListItem textColor="vs-white">
              <Link to="/typography/paragraph/">Paragraph</Link>
            </ListItem>
          </List>
        </ListItem>
        <ListItem textColor="vs-pink-200">
          Blocks
        </ListItem>
        <ListItem textColor="vs-white">
          <List unstyled>
            <ListItem textColor="vs-white">
              <Link to="/blocks/image-center/">Image Center</Link>
            </ListItem>
          </List>
        </ListItem>
        <ListItem textColor="vs-pink-200">
          External Links
        </ListItem>
        <ListItem textColor="vs-white">
          <List unstyled>
            <ListItem textColor="vs-white">
              <a href="https://github.com/cpinnix/verious">Github</a>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Navigation>
    {children}
    <Footer />
    <Baseline />
  </div>;
