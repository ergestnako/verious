import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import '../../scss/styles.scss';
import Navigation from '../../../react/components/Navigation';
import List from '../../../react/components/List';
import ListItem from '../../../react/components/ListItem';

export default ({ children }) =>
  <div>
    <Helmet />
    <Navigation>
      <List>
        <ListItem>
          <Link to="/typography/paragraph/">Paragraph</Link>
        </ListItem>
      </List>
    </Navigation>
    {children}
  </div>;
