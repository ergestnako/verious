const React = require('react');

class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  render() {
    return (
      <div>
        <div
          onClick={() => {
            this.setState({ open: !this.state.open });
          }}
          role="button"
          style={{ cursor: 'pointer' }}
        >
          {this.props.button}
        </div>
        <div style={{ display: this.state.open ? '' : 'none' }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

module.exports = Dropdown;
