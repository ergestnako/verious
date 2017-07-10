const React = require('react');

module.exports = ({ source }) => (
  <div className="vs-image-image" data-script="vsImage">
    <img
      className="vs-image-source"
      src={ source }
    />
  </div>
);
