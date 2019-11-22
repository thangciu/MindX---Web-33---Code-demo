const express = require('express');
const bodyParser = require('body-parser');

const user = require('./user');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use('/user', user);

app.use('/public', express.static('./public'));

app.listen(3000, function() {
  console.log('Server start on port 3000');
});