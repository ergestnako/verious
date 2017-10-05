const React = require('react');

function getClassName({ type }, { shouldNudge }) {
  return shouldNudge ? `animated ${type}` : '';
}

class AnimateAttention extends React.Component {
  constructor() {
    super();

    this.state = {
      shouldNudge: false
    };

    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter() {
    this.setState(Object.assign({}, this.state, { shouldNudge: true }));

    setTimeout(() => {
      this.setState(Object.assign({}, this.state, { shouldNudge: false }));
    }, 1000);
  }

  render() {
    return (
      <div
        className={getClassName(this.props, this.state)}
        onMouseEnter={this.handleEnter}
      >
        {this.props.children}
      </div>
    );
  }
}

module.exports = AnimateAttention
