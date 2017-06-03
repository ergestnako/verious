const React = require('react');
const Image = require('../../components/image');

module.exports = ({ source, caption }) => (
  <div className="vs-block-image-left" data-script="vsImageCenter">
    <div className="vs-block-image-left-container">
      <div className="vs-block-image-left-row">
        <div className="vs-block-image-left-content">
          <Image source={ source } />
          <div className="vs-square--2" />
          <p className="vs-block-image-left-caption">{ caption }</p>
        </div>
      </div>
    </div>
  </div>
);
