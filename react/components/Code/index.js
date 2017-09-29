const React = require('react');

module.exports = ({ children }) => (
  <div className="verious">
    <pre>
      <code>{children}</code>
    </pre>
  </div>
);
