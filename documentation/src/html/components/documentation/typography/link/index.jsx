const React = require('react');

module.exports = () => (
  <div className="link verious">
    <div className="link-container">
      <div className="link-row">
        <div className="link-header">
          <h2>Link</h2>
        </div>
      </div>
      <div className="link-row">
        <div className="link-left">
          <h3 className="vs-h5">Class</h3>
        </div>
        <div className="link-right">
          <pre>
            <code>
              {`
<div class="verious">
  <p><a>...</a></p>
  <a>...</a>
</div>
              `}
            </code>
          </pre>
        </div>
      </div>

      <div className="link-row">
        <div className="link-left">
          <h3 className="vs-h5">Prefix</h3>
        </div>
        <div className="link-right">
          <pre>
            <code>
              {`
<p class="vs-p"><a>...</a></p>
<a class="vs-a">...</a>
              `}
            </code>
          </pre>
        </div>
      </div>

      <div className="link-row">
        <div className="link-left">
          <h3 className="vs-h5">Mixin</h3>
        </div>
        <div className="link-right">
          <pre>
            <code>
              {`
.element {
  @include vs-a(/* $size */);
}
              `}
            </code>
          </pre>
        </div>
      </div>

      <div className="list-row">
        <div className="list-content">
          <h3 className="vs-h5">Sample</h3>
          <a href="http://charlespinnix.com">charlespinnix.com</a>
          <p><a href="http://charlespinnix.com">charlespinnix.com</a></p>
          <ul>
            <li><a href="http://charlespinnix.com">charlespinnix.com</a></li>
            <li><a href="http://charlespinnix.com">charlespinnix.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
