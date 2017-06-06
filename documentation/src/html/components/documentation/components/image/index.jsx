const React = require('react');

module.exports = () => (
  <div className="documentation-image verious">
    <div className="documentation-image-container">
      <div className="documentation-image-row">
        <div className="documentation-image-header">
          <h2>Image</h2>
        </div>
      </div>
      <div className="documentation-image-row">
        <div className="documentation-image-content">
          <h3>Static Markup</h3>
          <pre>
            <code>
              {`
<div className="vs-image-image" data-script="vsImage">
  <img
    class="vs-image-source"
    src="https://s3.amazonaws.com/cpinnix/site/img/2017_01_28_15_11_08_1024.jpg" />
</div>
              `}
            </code>
          </pre>
          <h3>React Component</h3>
          <pre>
            <code>
              {`
<Image source="https://s3.amazonaws.com/cpinnix/site/img/2017_01_28_15_11_08_1024.jpg" />
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
  </div>
);
