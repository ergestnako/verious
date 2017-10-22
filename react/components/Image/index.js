const React = require('react');
const Wrapper = require('../Wrapper');
const ImageBaseline = require('../ImageBaseline');

class Image extends React.Component {
  render() {
    let element = <div />;

    if (Array.isArray(this.props.source)) {
      element = (
        <Wrapper>
          <Wrapper visibility={[true, false, false, false]}>
            <ImageBaseline source={this.props.source[0]} />
          </Wrapper>
          <Wrapper visibility={[false, true, false, false]}>
            <ImageBaseline source={this.props.source[1]} />
          </Wrapper>
          <Wrapper visibility={[false, false, true, false]}>
            <ImageBaseline source={this.props.source[2]} />
          </Wrapper>
          <Wrapper visibility={[false, false, false, true]}>
            <ImageBaseline source={this.props.source[3]} />
          </Wrapper>
        </Wrapper>
      );
    } else {
      element = <ImageBaseline source={this.props.source} />;
    }

    return element;
  }
}

module.exports = Image;
