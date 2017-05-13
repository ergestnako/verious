const React = require('react');
const PropTypes = require('prop-types');

const component = ({ title, subtitle }) => (
  <div className="hero">
    <div className="hero-layout-button">
      <div className="vs-layout-left-panel-button">
        <i className="material-icons">menu</i>
      </div>
    </div>
    <div className="hero-container">
      <div className="hero-row">
        <div className="hero-content">
          <h1 className="hero-title">{ title }</h1>
          <h2 className="hero-subtitle">{ subtitle }</h2>
        </div>
      </div>
    </div>
  </div>
);

component.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

module.exports = component;
