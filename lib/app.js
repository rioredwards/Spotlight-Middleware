const express = require('express');
const colors = require('./middleware/colors');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use('/colors', colors, require('./controllers/colors'));
app.use('/error', require('./controllers/errors'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
