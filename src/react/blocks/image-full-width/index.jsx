const React = require('react');
const Image = require('../../components/image');

module.exports = ({ source, caption }) => (
  <div className="vs-block-image-full-width">
    <Image source={ source } />
    {/* <div className="vs-block-image-full-width-container">
      <div className="vs-block-image-full-width-row">
        <div className="vs-block-image-full-width-content">
          <div className="vs-square--2" />
          <p className="vs-block-image-full-width-caption">{ caption }</p>
        </div>
      </div>
    </div> */}
  </div>
);
