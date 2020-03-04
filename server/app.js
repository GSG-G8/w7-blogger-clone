const express = require('express');
const { join } = require('path');
const compression = require('compression');

const app = express();

const router = require('./controllers');

app.disable('x-powered-by');
app.use(compression());

app.use(express.static(join(__dirname, '..', 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.set('port', process.env.PORT || 5300);


module.exports = app;
