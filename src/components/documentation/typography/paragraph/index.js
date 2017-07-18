const React = require('react');
const Container = require('../../../../../react/components/Container');
const Row = require('../../../../../react/components/Row');
const Column = require('../../../../../react/components/Column');
const Heading = require('../../../../../react/components/Heading');
const Paragraph = require('../../../../../react/components/Paragraph');
const Code = require('../../../../../react/components/Code');
const Square = require('../../../../../react/components/Square');

module.exports = () => (
  <div>
    <Square size="4" />

    <Container>
      <Row>
        <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
          <Heading size="2">Usage</Heading>
        </Column>
      </Row>
      <Row>
        <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]} >
          <Paragraph>The Paragraph component is super simple, just import the component and drop it in. The paragraph will scale across devices and follow the baseline grid.</Paragraph>
          <Code>
            {`
const React = require('react');
const Paragraph = require('verious/dist/react/components/Paragraph');

module.exports = () => <Paragraph>Hello World</Paragraph>;
            `}
          </Code>
          <Paragraph>Add the textColor attribute to change the text color.</Paragraph>
          <Code>
            {`
const React = require('react');
const Paragraph = require('verious/dist/react/components/Paragraph');

module.exports = () => <Paragraph textColor="vs-red-500">Hello World</Paragraph>;
            `}
          </Code>
        </Column>
      </Row>
      <Row>
        <Column span={[6, 12, 16, 16]} push={[0, 0, 0, 0]}>
          <Heading size="2">Example</Heading>
        </Column>
      </Row>
      <Row>
        <Column span={[6, 6, 8, 8]} push={[0, 0, 0, 0]}>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at turpis ante. Cras aliquet fringilla feugiat. Donec hendrerit, ex vitae pellentesque luctus, ante nunc luctus lacus, et mattis dolor mi sit amet tellus. Nulla sit amet sem diam. Nam volutpat nec libero nec fermentum. Sed eu venenatis dolor, vitae egestas arcu. Etiam viverra, elit ut pretium aliquam, turpis libero ultricies dui, eget sodales lorem purus quis dui. Morbi id elit neque. Morbi feugiat elit sem, eget scelerisque velit dapibus at. Morbi congue varius tincidunt. Morbi in mattis diam, vitae dignissim neque.</Paragraph>
        </Column>
        <Column span={[6, 6, 8, 8]} push={[0, 0, 0, 0]}>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at turpis ante. Cras aliquet fringilla feugiat. Donec hendrerit, ex vitae pellentesque luctus, ante nunc luctus lacus, et mattis dolor mi sit amet tellus. Nulla sit amet sem diam. Nam volutpat nec libero nec fermentum. Sed eu venenatis dolor, vitae egestas arcu. Etiam viverra, elit ut pretium aliquam, turpis libero ultricies dui, eget sodales lorem purus quis dui. Morbi id elit neque. Morbi feugiat elit sem, eget scelerisque velit dapibus at. Morbi congue varius tincidunt. Morbi in mattis diam, vitae dignissim neque.</Paragraph>
        </Column>
      </Row>

      <Square size="4" />

      <Row>
        <Column span={[6, 6, 8, 8]} push={[0, 0, 0, 0]}>
          <Paragraph textColor="vs-pink-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at turpis ante. <a href="http://charlespinnix.com">Cras aliquet fringilla feugiat</a>. Donec hendrerit, ex vitae pellentesque luctus, ante nunc luctus lacus, et mattis dolor mi sit amet tellus. Nulla sit amet sem diam. Nam volutpat nec libero nec fermentum. Sed eu venenatis dolor, vitae egestas arcu. Etiam viverra, elit ut pretium aliquam, turpis libero ultricies dui, eget sodales lorem purus quis dui. Morbi id elit neque. Morbi feugiat elit sem, eget scelerisque velit dapibus at. Morbi congue varius tincidunt. Morbi in mattis diam, vitae dignissim neque.</Paragraph>
          <Paragraph>Maecenas blandit ornare enim, eget mattis sem cursus at. Nunc malesuada velit id urna iaculis malesuada. Proin eu erat tempor, egestas erat quis, iaculis eros. Donec ultricies erat metus, in pulvinar sapien suscipit eget. Vivamus vestibulum tortor ac feugiat volutpat. Etiam consectetur, elit ut iaculis fermentum, tellus ipsum rutrum neque, vitae commodo tortor ligula vitae mauris. Quisque ornare sodales malesuada. Suspendisse consectetur volutpat ante at facilisis. Sed mollis felis vel odio sagittis, in condimentum augue tristique. Duis vel quam mollis, feugiat justo a, maximus justo.</Paragraph>
          <Paragraph textColor="vs-green-500">Aliquam laoreet malesuada metus molestie luctus. Ut purus risus, lobortis sit amet enim rutrum, porttitor suscipit leo. Fusce varius tristique justo, ac hendrerit arcu imperdiet nec. Nam non ligula ex. In dictum tristique nisl ac faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam molestie, turpis quis finibus tincidunt, neque arcu semper turpis, eget aliquam neque tellus eu massa. Proin faucibus nulla nec nisi gravida, sed dignissim metus laoreet. Duis scelerisque leo non odio vehicula fringilla. Proin sit amet odio quam. Maecenas leo lectus, rhoncus at bibendum quis, interdum ut orci. Vestibulum vehicula posuere arcu ac semper. Quisque eu turpis blandit, maximus enim imperdiet, tristique diam. Nullam accumsan tempor ultrices.</Paragraph>
        </Column>
      </Row>
    </Container>

    <Square size="4" />
  </div>
);
