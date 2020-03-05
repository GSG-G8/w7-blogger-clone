const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

const { join } = require('path');
const compression = require('compression');
const router = require('./controllers');

app.disable('x-powered-by');
app.use(compression());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 5300);

app.use(express.static(join(__dirname, '..', 'public')));
app.use(router);


module.exports = app;
