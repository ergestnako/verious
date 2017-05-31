const React = require('react');

module.exports = () => (
  <div className="list verious">
    <div className="list-container">
      <div className="paragraph-row">
        <div className="paragraph-header">
          <h2>List</h2>
        </div>
      </div>
      <div className="list-row">
        <div className="list-left">
          <h3 className="vs-h5">Class</h3>
        </div>
        <div className="list-right">
          <pre>
            <code>
              {`
<div class="verious">
  <ul>
    <li>
      ...
    </li>
  </ul>
</div>
              `}
            </code>
          </pre>
        </div>
      </div>

      <div className="list-row">
        <div className="list-left">
          <h3 className="vs-h5">Prefix</h3>
        </div>
        <div className="list-right">
          <pre>
            <code>
              {`
<ul class="vs-ul">
  <li class="vs-li">
    ...
  </li>
</ul>

<ul class="vs-ul--unstyled">
  <li class="vs-li">
    ...
  </li>
</ul>
              `}
            </code>
          </pre>
        </div>
      </div>

      <div className="list-row">
        <div className="list-left">
          <h3 className="vs-h5">Mixin</h3>
        </div>
        <div className="list-right">
          <pre>
            <code>
              {`
ul {
  @include vs-ul();

  &.unstyled {
    @include vs-ul--unstyled();
  }
}

li {
  @include vs-li(/* $size */);
}
              `}
            </code>
          </pre>
        </div>
      </div>

      <div className="list-row">
        <div className="list-content">
          <h3 className="vs-h5">Sample</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Cras at turpis ante. Cras aliquet fringilla feugiat.</li>
            <li>Donec hendrerit, ex vitae pellentesque luctus, ante nunc luctus lacus, et mattis dolor mi sit amet tellus.</li>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Cras at turpis ante. Cras aliquet fringilla feugiat.</li>
              <li>Donec hendrerit, ex vitae pellentesque luctus, ante nunc luctus lacus, et mattis dolor mi sit amet tellus.</li>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Cras at turpis ante. Cras aliquet fringilla feugiat.</li>
                <li>Donec hendrerit, ex vitae pellentesque luctus, ante nunc luctus lacus, et mattis dolor mi sit amet tellus.</li>
              </ul>
            </ul>
          </ul>
          <ul className="vs-ul--unstyled">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Cras at turpis ante. Cras aliquet fringilla feugiat.</li>
            <li>Donec hendrerit, ex vitae pellentesque luctus, ante nunc luctus lacus, et mattis dolor mi sit amet tellus.</li>
            <li>
              <ul className="vs-ul--unstyled">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Cras at turpis ante. Cras aliquet fringilla feugiat.</li>
                <li>Donec hendrerit, ex vitae pellentesque luctus, ante nunc luctus lacus, et mattis dolor mi sit amet tellus.</li>
                <li>
                  <ul className="vs-ul--unstyled">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Cras at turpis ante. Cras aliquet fringilla feugiat.</li>
                    <li>Donec hendrerit, ex vitae pellentesque luctus, ante nunc luctus lacus, et mattis dolor mi sit amet tellus.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
