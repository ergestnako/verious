const React = require('react');
const Image = require('../../components/image');

module.exports = ({ source, caption }) => (
  <div className="vs-block-image-right" data-script="vsImageCenter">
    <div className="vs-block-image-right-container">
      <div className="vs-block-image-right-row">
        <div className="vs-block-image-right-content">
          <Image source={ source } />
          <div className="vs-square--2" />
          <p className="vs-block-image-right-caption">{ caption }</p>
        </div>
      </div>
    </div>
  </div>
);
