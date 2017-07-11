const React = require('react');
const Image = require('../../components/Image');
const Wrapper = require('../../components/Wrapper');

module.exports = ({ source, caption }) => (
  <Wrapper>
    <Image source={source} />
  </Wrapper>
);
