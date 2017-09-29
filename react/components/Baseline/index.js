/* global window */

const React = require('react');

class Baseline extends React.Component {
  constructor() {
    super();
    this.state = { visible: false };

    if (typeof window !== 'undefined') {
      window.showBaseline = () => {
        this.setState({ visible: true });
      };
    }
  }

  getClassName() {
    let classes = ['vs-baseline'];

    if (this.state.visible) {
      classes = [...classes, 'vs-baseline--active'];
    }

    return classes.join(' ');
  }

  render() {
    return (
      <div
        className={this.getClassName()}
        onClick={() => this.setState({ visible: false })}
      />
    );
  }
}

module.exports = Baseline;
