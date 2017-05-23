const React = require('react');
const ImageCenter = require('../../../../../../../src/react/image-center');

module.exports = ({ caption }) => (
  <div className="image-center verious">
    <div className="image-center-container">
      <div className="image-center-row">
        <div className="image-center-header">
          <h2>Image Center</h2>
        </div>
      </div>
      <div className="image-center-row">
        <div className="image-center-content">
          <h3>Static Markup</h3>
          <pre>
            <code>
              {`
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
              `}
            </code>
          </pre>
          <h3>React Component</h3>
          <pre>
            <code>
              {`
<ImageCenter caption="Pinnix, Charles. 2017_01_28_15_11_08. 2017. Washington, DC." />
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div className="image-center-component">
      <ImageCenter caption="Pinnix, Charles. 2017_01_28_15_11_08. 2017. Washington, DC." />
    </div>
  </div>
);
