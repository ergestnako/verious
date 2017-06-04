const React = require('react');
const ImageRight = require('../../../../../../../src/react/blocks/image-right');

module.exports = ({ caption }) => (
  <div className="image-right-documentation verious">
    <div className="image-right-documentation-container">
      <div className="image-right-documentation-row">
        <div className="image-right-documentation-header">
          <h2>Image Right</h2>
        </div>
      </div>
      <div className="image-right-documentation-row">
        <div className="image-right-documentation-content">
          <h3>Static Markup</h3>
          <pre>
            <code>
              {`
<div className="vs-block-image-right" data-script="vsImageCenter">
  <div className="vs-block-image-right-container">
    <div className="vs-block-image-right-row">
      <div className="vs-block-image-right-content">
        <div className="vs-image-image">
          <img
            className="vs-image-source"
            src="https://s3.amazonaws.com/cpinnix/site/img/2017_01_28_15_11_08_1024.jpg" />
        </div>
        <div className="vs-square--2" />
        <p className="vs-block-image-right-caption">Pinnix, Charles. 2017_01_28_15_11_08. 2017. Washington, DC.</p>
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
<ImageRight
  source="https://s3.amazonaws.com/cpinnix/site/img/2017_01_28_15_11_08_1024.jpg"
  caption="Pinnix, Charles. 2017_01_28_15_11_08. 2017. Washington, DC."
/>
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div className="image-right-documentation-component">
      <ImageRight
        source="https://s3.amazonaws.com/cpinnix/site/img/2017_01_28_15_10_34_1024.jpg"
        caption="Pinnix, Charles. 2017_01_28_15_10_34_1024. 2017. Washington, DC."
      />
    </div>
  </div>
);
