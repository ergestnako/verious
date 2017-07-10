const React = require('react');

module.exports = () => (
  <div className="code verious">
    <div className="code-container">
      <div className="code-row">
        <div className="code-header">
          <h2>Code</h2>
        </div>
      </div>
      <div className="code-row">
        <div className="code-left">
          <h3 className="vs-h5">Class</h3>
        </div>
        <div className="code-right">
          <pre>
            <code>
              {`
<div class="verious">
  <pre>
    <code>
      ...
    </code>
  </pre>
</div>
              `}
            </code>
          </pre>
        </div>
      </div>

      <div className="code-row">
        <div className="code-left">
          <h3 className="vs-h5">Prefix</h3>
        </div>
        <div className="code-right">
          <pre>
            <code>
              {`
<pre class="vs-pre">
  <code class="vs-code">
    ...
  </code>
</pre>
              `}
            </code>
          </pre>
        </div>
      </div>

      <div className="code-row">
        <div className="code-left">
          <h3 className="vs-h5">Mixin</h3>
        </div>
        <div className="code-right">
          <pre>
            <code>
              {`
.element-pre {
  @include vs-pre();
}

.element-code {
  @include vs-code(/* $size */);
}
              `}
            </code>
          </pre>
        </div>
      </div>

      <div className="code-row">
        <div className="code-content">
          <h3 className="vs-h5">Sample</h3>
          <pre>
            <code>
              {`
.code {

  // ---------------------------------------------
  //    1. Base
  // ---------------------------------------------

  &-container {
    @include vs-container();
  }

  &-row {
    @include vs-row();
  }

  // ---------------------------------------------
  //    2. Responsive
  // ---------------------------------------------

  @include vs-at-breakpoint($vs-screen-sm) {
    &-content {
      @include vs-col($vs-screen-sm, 6);
      @include vs-padding(top, 10);
      @include vs-padding(bottom, 10);
    }
  }

  @include vs-at-breakpoint($vs-screen-md) {
    &-content {
      @include vs-col($vs-screen-md, 12);
      @include vs-padding(top, 10);
      @include vs-padding(bottom, 10);
    }
  }

  @include vs-at-breakpoint($vs-screen-lg) {
    &-content {
      @include vs-col($vs-screen-lg, 16);
      @include vs-padding(top, 10);
      @include vs-padding(bottom, 10);
    }
  }

  @include vs-at-breakpoint($vs-screen-xl) {
    &-content {
      @include vs-col($vs-screen-xl, 16);
      @include vs-padding(top, 10);
      @include vs-padding(bottom, 10);
    }
  }
}
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
  </div>
);
