const React = require('react');
const ImageFullWidth = require('../../../../../../../src/react/blocks/image-full-width');

module.exports = ({ caption }) => (
  <div className="image-full-width-documentation verious">
    <div className="image-full-width-documentation-container">
      <div className="image-full-width-documentation-row">
        <div className="image-full-width-documentation-header">
          <h2>Image Full Width</h2>
        </div>
      </div>
      <div className="image-full-width-documentation-row">
        <div className="image-full-width-documentation-content">
          <h3>Static Markup</h3>
          <pre>
            <code>
              {`
<div className="vs-block-image-full-width" data-script="vsImageCenter">
  <div className="vs-image-image">
    <img
      className="vs-image-source"
      src="https://s3.amazonaws.com/cpinnix/site/img/2017_01_28_15_11_08_1024.jpg" />
  </div>
  <div className="vs-block-image-full-width-container">
    <div className="vs-block-image-full-width-row">
      <div className="vs-block-image-full-width-content">
        <div className="vs-square--2" />
        <p className="vs-block-image-full-width-caption">Pinnix, Charles. 2017_01_28_15_11_08. 2017. Washington, DC.</p>
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
<ImageFullWidth
  source="https://s3.amazonaws.com/cpinnix/site/img/2017_01_28_15_11_08_1024.jpg"
  caption="Pinnix, Charles. 2017_01_28_15_11_08. 2017. Washington, DC."
/>
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div className="image-full-width-documentation-component">
      <ImageFullWidth
        source="https://s3.amazonaws.com/cpinnix/site/img/2017_01_28_15_11_08_1024.jpg"
        caption="Pinnix, Charles. 2017_01_28_15_11_08. 2017. Washington, DC."
      />
    </div>
  </div>
);
