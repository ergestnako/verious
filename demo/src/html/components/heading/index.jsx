const React = require('react');

module.exports = () => (
  <div className="heading verious">
    <div className="heading-container">
      <div className="heading-row">
        <div className="heading-header">
          <h2>Heading</h2>
        </div>
      </div>
      <div className="heading-row">
        <div className="heading-left">
          <h3 className="vs-h5">Class</h3>
        </div>
        <div className="heading-right">
          <pre>
            <code>
              {`
<div className="verious">
  <h1>...</h1>
  <h2>...</h2>
  <h3>...</h3>
  <h4>...</h4>
  <h5>...</h5>
  <h6>...</h6>
</div>
              `}
            </code>
          </pre>
        </div>
      </div>

      <div className="heading-row">
        <div className="heading-left">
          <h3 className="vs-h5">Prefix</h3>
        </div>
        <div className="heading-right">
          <pre>
            <code>
              {`
<h1 className="vs-h1">...</h1>
<h2 className="vs-h2">...</h2>
<h3 className="vs-h3">...</h3>
<h4 className="vs-h4">...</h4>
<h5 className="vs-h5">...</h5>
<h6 className="vs-h6">...</h6>
              `}
            </code>
          </pre>
        </div>
      </div>

      <div className="heading-row">
        <div className="heading-left">
          <h3 className="vs-h5">Mixin</h3>
        </div>
        <div className="heading-right">
          <pre>
            <code>
              {`
  .element {
    @include vs-h(/* $size */);
  }
              `}
            </code>
          </pre>
        </div>
      </div>

      <div className="list-row">
        <div className="list-content">
          <h3 className="vs-h5">Sample</h3>
          <h1>The quick brown fox jumps over the lazy dog</h1>
          <h2>The quick brown fox jumps over the lazy dog</h2>
          <h3>The quick brown fox jumps over the lazy dog</h3>
          <h4>The quick brown fox jumps over the lazy dog</h4>
          <h5>The quick brown fox jumps over the lazy dog</h5>
          <h6>The quick brown fox jumps over the lazy dog</h6>
        </div>
      </div>
    </div>
  </div>
);
