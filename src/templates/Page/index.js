import React from 'react';
import Helmet from 'react-helmet';
import '../../scss/styles.scss';

export default ({ children }) =>
  <div>
    <Helmet />
    {children}
  </div>;
