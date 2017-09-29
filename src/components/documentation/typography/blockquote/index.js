const React = require('react');
const Blockquote = require('../../../../../../../src/react/components/blockquote');

module.exports = () => (
  <div className="blockquote-documentation verious">
    <div className="blockquote-documentation-container">
      <div className="blockquote-documentation-row">
        <div className="blockquote-documentation-header">
          <h2>Blockquote</h2>
        </div>
      </div>
      <div className="blockquote-documentation-row">
        <div className="blockquote-documentation-left">
          <h3 className="vs-h5">Class</h3>
        </div>
        <div className="blockquote-documentation-right">
          <pre>
            <code>
              {`
<div class="verious">
  <blockquote>
    <p>
      ...
    </p>
  </blockquote>
</div>
              `}
            </code>
          </pre>
        </div>
      </div>

      <div className="blockquote-documentation-row">
        <div className="blockquote-documentation-left">
          <h3 className="vs-h5">Prefix</h3>
        </div>
        <div className="blockquote-documentation-right">
          <pre>
            <code>
              {`
<blockquote class="vs-blockquote">
  <p>
    ...
  </p>
</blockquote>
              `}
            </code>
          </pre>
        </div>
      </div>

      <div className="blockquote-documentation-row">
        <div className="blockquote-documentation-left">
          <h3 className="vs-h5">Mixin</h3>
        </div>
        <div className="blockquote-documentation-right">
          <pre>
            <code>
              {`
.element {
  @include vs-blockquote(/* $size */);
}
              `}
            </code>
          </pre>
        </div>
      </div>

      <div className="blockquote-documentation-row">
        <div className="blockquote-documentation-left">
          <h3 className="vs-h5">React</h3>
        </div>
        <div className="blockquote-documentation-right">
          <pre>
            <code>
              {`
<Blockquote>
  <p>
    ...
  </p>
</Blockquote>
              `}
            </code>
          </pre>
        </div>
      </div>

      <div className="blockquote-documentation-row">
        <div className="blockquote-documentation-content">
          <Blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci
              lorem, congue vel tellus vitae, pretium ullamcorper tortor.
              Phasellus ante augue, consequat blandit quam quis, fermentum
              dignissim est.
            </p>
          </Blockquote>
        </div>
      </div>
    </div>
  </div>
);
