const React = require('react');

module.exports = ({ caption }) => (
  <div className="vs-image-center" data-script="vsImageCenter">
    <div className="vs-image-center-container">
      <div className="vs-image-center-row">
        <div className="vs-image-center-content">
          <div className="vs-image-center-image">
            <img
              className="vs-image-center-source"
              src="https://s3.amazonaws.com/cpinnix/site/img/2017_01_28_15_11_08_1024.jpg" />
          </div>
          <div className="vs-spacer--2" />
          <p className="vs-image-center-caption">{ caption }</p>
        </div>
      </div>
    </div>
  </div>
);
