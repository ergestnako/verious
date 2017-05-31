const React = require('react');
const Image = require('../../components/image');

module.exports = ({ source, caption }) => (
  <div className="vs-block-image-center" data-script="vsImageCenter">
    <div className="vs-block-image-center-container">
      <div className="vs-block-image-center-row">
        <div className="vs-block-image-center-content">
          <Image source={ source } />
          <div className="vs-square--2" />
          <p className="vs-block-image-center-caption">{ caption }</p>
        </div>
      </div>
    </div>
  </div>
);
