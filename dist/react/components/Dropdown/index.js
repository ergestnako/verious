const React = require('react');

class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        {
          onClick: () => {
            this.setState({ open: !this.state.open });
          },
          role: 'button',
          style: { cursor: 'pointer' }
        },
        this.props.button
      ),
      React.createElement(
        'div',
        { style: { display: this.state.open ? '' : 'none' } },
        this.props.children
      )
    );
  }
}

module.exports = Dropdown;