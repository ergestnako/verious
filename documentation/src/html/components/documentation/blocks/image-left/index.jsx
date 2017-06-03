const React = require('react');
const ImageLeft = require('../../../../../../../src/react/blocks/image-left');

module.exports = ({ caption }) => (
  <div className="image-left-documentation verious">
    <div className="image-left-documentation-container">
      <div className="image-left-documentation-row">
        <div className="image-left-documentation-header">
          <h2>Image Left</h2>
        </div>
      </div>
      <div className="image-left-documentation-row">
        <div className="image-left-documentation-content">
          <h3>Static Markup</h3>
          <pre>
            <code>
              {`
<div className="vs-block-image-left" data-script="vsImageCenter">
  <div className="vs-block-image-left-container">
    <div className="vs-block-image-left-row">
      <div className="vs-block-image-left-content">
        <div className="vs-image-image">
          <img
            className="vs-image-source"
            src="https://s3.amazonaws.com/cpinnix/site/img/2017_01_28_15_11_08_1024.jpg" />
        </div>
        <div className="vs-square--2" />
        <p className="vs-block-image-left-caption">Pinnix, Charles. 2017_01_28_15_11_08. 2017. Washington, DC.</p>
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
<ImageLeft
  source="https://s3.amazonaws.com/cpinnix/site/img/2017_01_28_15_11_08_1024.jpg"
  caption="Pinnix, Charles. 2017_01_28_15_11_08. 2017. Washington, DC."
/>
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div className="image-left-documentation-component">
      <ImageLeft
        source="https://s3.amazonaws.com/cpinnix/site/img/2017_01_28_15_10_34_1024.jpg"
        caption="Pinnix, Charles. 2017_01_28_15_10_34_1024. 2017. Washington, DC."
      />
    </div>
  </div>
);
