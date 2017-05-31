const React = require('react');

module.exports = () => (
  <div className="sidebar verious">
    <ul className="vs-ul--unstyled">
      <li>Typography</li>
      <li>
        <ul className="vs-ul--unstyled">
          <li><a href="/typography/heading">Headings</a></li>
          <li><a href="/typography/paragraph">Paragraphs</a></li>
          <li><a href="/typography/link">Links</a></li>
          <li><a href="/typography/list">Lists</a></li>
          <li><a href="/typography/code">Code</a></li>
        </ul>
      </li>
      <li>Components</li>
      <li>
        <ul className="vs-ul--unstyled">
          <li><a href="/components/image">Image</a></li>
          <li><a href="/components/presentation">Presentation</a></li>
          <li><a href="/components/layout-left-panel">Layout Left Panel</a></li>
          <li><a href="/components/layout">Layout</a></li>
        </ul>
      </li>
      <li>Blocks</li>
      <li>
        <ul className="vs-ul--unstyled">
          <li><a href="/blocks/image-center">Image Center</a></li>
        </ul>
      </li>
    </ul>
    {/* <div className="vs-baseline" /> */}
    <div className="sidebar-baseline-button">
      <div className="vs-baseline-button">
        <i className="material-icons">format_line_spacing</i>
      </div>
    </div>
  </div>
);
