const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const api = require('./api/router');
const { API_ROOT_PATH } = require('./api/router');

const app = express();
const PATH_TO_STATIC_DIR = 'client/build';

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, PATH_TO_STATIC_DIR)))
  .use(API_ROOT_PATH, api)
  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname, PATH_TO_STATIC_DIR, 'index.html'));
  });

module.exports = app;
