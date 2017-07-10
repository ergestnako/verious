const React = require('react');
const Page = require('../../../components/blankPage');
// const Layout = require('../../../../../../src/react/components/layout');
// const Square = require('../../../../../../src/react/components/square');
// const Rectangle = require('../../../../../../src/react/components/rectangle');
// const Spacer = require('../../../../../../src/react/components/spacer');
// const BackgroundImage = require('../../../../../../src/react/components/background-image');
const ImageFullWidth = require('../../../../../../src/react/blocks/image-full-width');
const ImageLeft = require('../../../../../../src/react/blocks/image-left');
const ImageRight = require('../../../../../../src/react/blocks/image-right');
const ImageCenter = require('../../../../../../src/react/blocks/image-center');

module.exports = () => (
  <Page>
    <ImageFullWidth
      source="https://s3.amazonaws.com/cpinnix/site/img/2017_01_28_14_51_15_1024.jpg"
      caption="Pinnix, Charles. 2017_01_28_15_11_08. 2017. Washington, DC."
    />
    <ImageLeft
      source="https://s3.amazonaws.com/cpinnix/site/img/2017_01_28_15_10_34_1024.jpg"
      caption="Pinnix, Charles. 2017_01_28_15_11_08. 2017. Washington, DC."
    />
    <ImageCenter
      source="https://s3.amazonaws.com/cpinnix/site/img/2017_01_28_14_59_00_1024.jpg"
      caption="Pinnix, Charles. 2017_01_28_15_11_08. 2017. Washington, DC."
    />
    <ImageRight
      source="https://s3.amazonaws.com/cpinnix/site/img/2017_01_28_15_11_08_1024.jpg"
      caption="Pinnix, Charles. 2017_01_28_15_11_08. 2017. Washington, DC."
    />
    <ImageRight
      source="https://s3.amazonaws.com/cpinnix/site/img/2017_01_28_15_13_25_1024.jpg"
      caption="Pinnix, Charles. 2017_01_28_15_11_08. 2017. Washington, DC."
    />
  </Page>
);
