const React = require('react');

module.exports = ({ source, caption }) => (
  <div className="vs-block-image-center" data-script="vsImageCenter">
    <div className="vs-block-image-center-container">
      <div className="vs-block-image-center-row">
        <div className="vs-block-image-center-content">
          <div className="vs-image-image">
            <img
              className="vs-image-source"
              src={ source } />
          </div>
          <div className="vs-spacer--2" />
          <p className="vs-block-image-center-caption">{ caption }</p>
        </div>
      </div>
    </div>
  </div>
);
