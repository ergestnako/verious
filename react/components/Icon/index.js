import React from 'react';
import { BackgroundColor } from 'verious-react/components/BackgroundColor/BackgroundColor';

module.exports = ({ children, backgroundColor }) => (
  <BackgroundColor color={backgroundColor} style={{ display: 'table' }}>
    <div className="vs-icon">{children}</div>
  </BackgroundColor>
);
