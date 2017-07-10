/** --------------------------------------------------------------------------------------------
 *
 * Server.
 *
 * -------------------------------------------------------------------------------------------*/

const port = process.env.PORT || 8080;

const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(compression());

const frontendPath = path.join(__dirname, '..', 'documentation', 'public');
app.use(express.static(frontendPath));

app.listen(port);

console.log(`Listening on port ${port}`); // eslint-disable-line
