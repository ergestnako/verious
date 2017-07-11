# Verious

A library of very serious react components for building static websites with [Gatsby](https://www.gatsbyjs.org/).

## Reference

https://github.com/jakegiltsoff/sassline
https://github.com/simonlindsay/typographic-rhythm

### Dependencies

#### Install

    npm install

### Build & Run

#### 1. Build Public Directory

    npm run build

#### 2. Build Docker Image

    docker build -t verious .

#### 3. Run Docker Image

    docker run -d --publish 3000:8080 --name verious verious
