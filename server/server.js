const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const moment = require('moment');

require('dotenv').config({
  path: 'variables.env'
});

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true }, () => {
  console.log('DB is connected');
});
mongoose.Promise = global.Promise;
require('./models/Sites');

const routes = require('./routes');

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
}); */

app.use('/', routes);

app.listen(port, () => console.log(`[${moment().format('H:HH:ss')}]: Listening on port ${port}`));
