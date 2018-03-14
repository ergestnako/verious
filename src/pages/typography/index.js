const React = require('react');
const Page = require('../../templates/Page');
const Hero = require('../../components/Hero');
const { Container } = require('verious-react/components/Container/Container');
const { Grid } = require('verious-react/components/Grid/Grid');
const { Row } = require('verious-react/components/Row/Row');
const { Column } = require('verious-react/components/Column/Column');
const Paragraph = require('../../../react/components/Paragraph');
const Code = require('../../../react/components/Code');
const List = require('../../../react/components/List');
const OrderedList = require('../../../react/components/OrderedList');
const ListItem = require('../../../react/components/ListItem');
const Text = require('../../../react/components/Text');
const Heading = require('../../../react/components/Heading');
const Square = require('../../../react/components/Square');

module.exports = () => (
  <Page>
    <Hero title="Typography" subtitle="Documentation for typography." />
    <Container padding={[8, 0, 8, 0]}>
      <Grid>
        <Row>
          <Column span={[6, 12, 16, 4]} push={[0, 0, 0, 0]}>
            <Heading size={2}>Headings</Heading>
            <Heading size={1}>
              The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading size={2}>
              The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading size={3}>
              The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading size={4}>
              The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading size={5}>
              The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading size={6}>
              The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading size={2}>Paragraphs</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              maximus euismod ultrices. Nunc pharetra fringilla felis, ut tempus
              dui molestie ac. Praesent a mi aliquet, mollis lacus ut, suscipit
              nibh. Nunc blandit ex id nisl luctus euismod. Donec at velit nec
              diam volutpat ullamcorper ut at purus. Etiam iaculis augue turpis,
              ac sodales felis vehicula id. Nulla facilisi. Morbi vitae viverra
              diam, a iaculis est. Nullam at mauris porttitor lorem pellentesque
              tincidunt. Vivamus congue risus lobortis, convallis turpis quis,
              volutpat metus. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia Curae; Curabitur posuere purus
              nec erat gravida, ac vehicula velit rhoncus. Nunc viverra ligula
              eu ullamcorper lobortis. In sit amet libero convallis, rhoncus
              mauris quis, luctus lectus.
            </Paragraph>
            <Heading size={2}>Lists</Heading>
            <List>
              <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
              <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
              <List>
                <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
                <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
                <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
                <List>
                  <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
                  <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
                  <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
                  <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
                </List>
                <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
              </List>
              <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
              <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
            </List>
            <OrderedList>
              <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
              <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
              <OrderedList>
                <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
                <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
                <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
                <List>
                  <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
                  <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
                  <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
                  <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
                </List>
                <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
              </OrderedList>
              <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
              <ListItem>The quick brown fox jumps over the lazy dog</ListItem>
            </OrderedList>
            <Heading size={2}>Code</Heading>
            <Heading size={2}>Text</Heading>
            <Text size={1} font="helvetica">
              The quick brown fox jumps over the lazy dog
            </Text>
            <Square size={4} />
            <Text size={2} font="helvetica">
              The quick brown fox jumps over the lazy dog
            </Text>
            <Square size={4} />
            <Text size={3} font="helvetica">
              The quick brown fox jumps over the lazy dog
            </Text>
            <Square size={4} />
            <Text size={4} font="helvetica">
              The quick brown fox jumps over the lazy dog
            </Text>
            <Square size={4} />
            <Text size={5} font="helvetica">
              The quick brown fox jumps over the lazy dog
            </Text>
            <Square size={4} />
            <Text size={6} font="helvetica">
              The quick brown fox jumps over the lazy dog
            </Text>
            <Square size={4} />
            <Text size={7} font="helvetica">
              The quick brown fox jumps over the lazy dog
            </Text>
            <Square size={4} />
            <Text size={8} font="helvetica">
              The quick brown fox jumps over the lazy dog
            </Text>
            <Square size={4} />
            <Text size={9} font="helvetica">
              The quick brown fox jumps over the lazy dog
            </Text>
            <Square size={4} />
            <Text size={10} font="helvetica">
              The quick brown fox jumps over the lazy dog
            </Text>
            <Square size={4} />
            <Text size={11} font="helvetica">
              The quick brown fox jumps over the lazy dog
            </Text>
            <Square size={4} />
            <Text size={12} font="helvetica">
              The quick brown fox jumps over the lazy dog
            </Text>
            <Square size={4} />
            <Text size={13} font="helvetica">
              The quick brown fox jumps over the lazy dog
            </Text>
            <Square size={4} />
            <Text size={14} font="helvetica">
              The quick brown fox jumps over the lazy dog
            </Text>
            <Square size={4} />
            <Text size={15} font="helvetica">
              The quick brown fox jumps over the lazy dog
            </Text>
            <Square size={4} />
            <Text size={16} font="helvetica">
              The quick brown fox jumps over the lazy dog
            </Text>
            <Code>Hello World</Code>
          </Column>
        </Row>
      </Grid>
    </Container>
  </Page>
);
