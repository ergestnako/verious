const React = require('react');

module.exports = () => (
  <div className="documentation-presentation verious">
    <div className="documentation-presentation-container">
      <div className="documentation-presentation-row">
        <div className="documentation-presentation-header">
          <h2>Presentation</h2>
        </div>
      </div>
      <div className="documentation-presentation-row">
        <div className="documentation-presentation-content">
          <p>Sample presentation can be found <a href="/presentations/example">here</a>.</p>
          <h3>Static Markup</h3>
          <pre>
            <code>
              {`
<div class="vs-presentation" data-script="vsPresentation" >
  <div class="vs-slide">
    ...
  </div>
  <div class="vs-slide">
    ...
  </div>
  <div class="vs-slide">
    ...
  </div>
</div>
              `}
            </code>
          </pre>
          <h3>React Component</h3>
          <pre>
            <code>
              {`
<Presentation>
  <Slide>
    ...
  </Slide>
  <Slide>
    ...
  </Slide>
  <Slide>
    ...
  </Slide>
</Presentation>
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
  </div>
);
