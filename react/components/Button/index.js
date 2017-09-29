const React = require('react');
const BackgroundColor = require('../BackgroundColor');
const Wrapper = require('../Wrapper');
const Text = require('../Text');

module.exports = ({ label, onClick, backgroundColor, textColor }) => (
  <div
    role="button"
    tabIndex={0}
    onClick={onClick}
    style={{ display: 'inline-block' }}
  >
    <BackgroundColor color={backgroundColor}>
      <Wrapper padding={[1, 1, 0, 1]}>
        <Text size={0} font="helvetica" color={textColor}>
          {label}
        </Text>
      </Wrapper>
    </BackgroundColor>
  </div>
);
