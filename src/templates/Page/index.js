import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import '../../scss/styles.scss';
import Navigation from '../../../react/components/Navigation';
import List from '../../../react/components/List';
import ListItem from '../../../react/components/ListItem';
import Footer from '../../components/Footer';

export default ({ children }) =>
  <div>
    <Helmet />
    <Navigation>
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
      </List>
    </Navigation>
    {children}
    <Footer />
  </div>;
