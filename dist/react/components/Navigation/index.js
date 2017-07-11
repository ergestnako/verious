const React = require('react');
const Container = require('../Container');
const Row = require('../Row');
const Column = require('../Column');
const Wrapper = require('../Wrapper');
const Button = require('../Button');
const Layout = require('../Layout');
const Spacer = require('../Spacer');

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  render() {
    return React.createElement(
      Wrapper,
      { backgroundColor: 'vs-pink-700' },
      React.createElement(
        Container,
        null,
        React.createElement(
          Row,
          null,
          React.createElement(
            Column,
            { span: [6, 12, 16, 16], push: [0, 0, 0, 0] },
            React.createElement(
              Wrapper,
              { padding: [0, 0, 0, 0] },
              React.createElement(
                Layout,
                { direction: 'horizontal' },
                React.createElement(Spacer, null),
                React.createElement(Button, {
                  onClick: () => this.setState({ open: true }),
                  style: { display: this.state.open ? 'none' : '' },
                  label: 'Menu',
                  textColor: 'vs-white'
                }),
                React.createElement(Button, {
                  onClick: () => this.setState({ open: false }),
                  style: { display: this.state.open ? '' : 'none' },
                  label: 'Close',
                  textColor: 'vs-white'
                })
              )
            )
          )
        )
      ),
      React.createElement(
        Wrapper,
        {
          style: { display: this.state.open ? '' : 'none' },
          backgroundColor: 'vs-pink-700',
          padding: [2, 0, 2, 0]
        },
        React.createElement(
          Container,
          null,
          React.createElement(
            Row,
            null,
            React.createElement(
              Column,
              { span: [6, 12, 16, 16], push: [0, 0, 0, 0] },
              this.props.children
            )
          )
        )
      )
    );
  }
}

module.exports = Navigation;