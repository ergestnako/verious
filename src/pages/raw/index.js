const React = require('react');
const Page = require('../../templates/Page');
const Hero = require('../../components/Hero');
const { Container } = require('verious-react/components/Container/Container');
const { Grid } = require('verious-react/components/Grid/Grid');
const { Row } = require('verious-react/components/Row/Row');
const { Column } = require('verious-react/components/Column/Column');

module.exports = () => (
  <Page>
    <Hero title="Raw" subtitle="Documentation for raw." />
    <Container padding={[8, 0, 8, 0]}>
      <Grid>
        <Row>
          <Column span={[12, 12, 12, 12, 12]}>
            <div className="verious">
              <h2>Headings</h2>
              <h1>The quick brown fox jumps over the lazy dog</h1>
              <h2>The quick brown fox jumps over the lazy dog</h2>
              <h3>The quick brown fox jumps over the lazy dog</h3>
              <h4>The quick brown fox jumps over the lazy dog</h4>
              <h5>The quick brown fox jumps over the lazy dog</h5>
              <h6>The quick brown fox jumps over the lazy dog</h6>
              <h2>Paragraphs</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                porttitor neque et eros tempor, vel auctor lorem tristique. Sed
                luctus interdum purus, eu tempus est ullamcorper quis. Phasellus
                et tempor purus. Aliquam quis efficitur velit. Nulla facilisi.
                Donec a magna commodo libero auctor ultricies sed ac tellus.
                Cras euismod, nisl nec varius condimentum, diam enim aliquet
                est, at fermentum risus leo at enim. Nullam ex arcu, laoreet at
                nibh sodales, molestie porttitor mi. Mauris elit lorem,
                hendrerit at justo eu, maximus vestibulum dui. Praesent mattis
                rutrum nulla at ultrices. Morbi vehicula ex nec aliquet
                placerat. Vestibulum nec hendrerit quam. Curabitur a nibh quis
                ex eleifend mollis vitae id quam. Sed ac interdum lacus.
              </p>
              <h2>Lists</h2>
              <ul>
                <li>The quick brown fox jumps over the lazy dog</li>
                <li>The quick brown fox jumps over the lazy dog</li>
                <ul>
                  <li>The quick brown fox jumps over the lazy dog</li>
                  <li>The quick brown fox jumps over the lazy dog</li>
                  <ul>
                    <li>The quick brown fox jumps over the lazy dog</li>
                    <li>The quick brown fox jumps over the lazy dog</li>
                    <li>The quick brown fox jumps over the lazy dog</li>
                    <li>The quick brown fox jumps over the lazy dog</li>
                  </ul>
                  <li>The quick brown fox jumps over the lazy dog</li>
                </ul>
                <li>The quick brown fox jumps over the lazy dog</li>
                <li>The quick brown fox jumps over the lazy dog</li>
              </ul>
              <ol>
                <li>The quick brown fox jumps over the lazy dog</li>
                <li>The quick brown fox jumps over the lazy dog</li>
                <ol>
                  <li>The quick brown fox jumps over the lazy dog</li>
                  <li>The quick brown fox jumps over the lazy dog</li>
                  <ul>
                    <li>The quick brown fox jumps over the lazy dog</li>
                    <li>The quick brown fox jumps over the lazy dog</li>
                    <li>The quick brown fox jumps over the lazy dog</li>
                    <li>The quick brown fox jumps over the lazy dog</li>
                  </ul>
                  <li>The quick brown fox jumps over the lazy dog</li>
                </ol>
                <li>The quick brown fox jumps over the lazy dog</li>
                <li>The quick brown fox jumps over the lazy dog</li>
              </ol>
              <h2>Code</h2>
            </div>
          </Column>
        </Row>
      </Grid>
    </Container>
  </Page>
);
