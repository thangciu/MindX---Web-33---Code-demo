const express = require('express');
const fs = require('fs');

const data = require('./data.json');

const user = express.Router();

user.get('/', function(request, response) {
  const query = request.query.q;

  const result = data.find(function(user) {
    return user.username === query;
  });

  if (result) {
    response.json({ data: result, success: true });
  } else {
    response.json({ message: 'User not exist', success: false });
  }
});

user.post('/new', function(request, response) {
  const data = request.body;

  fs.writeFile('./text.txt', JSON.stringify(data), function(err, data) {
    if (err) {
      response.json({ message: err, success: false });
    } else {
      response.json({ message: 'Success', success: true });
    }
  })
});

user.put('/')

user.put('/:index')

module.exports = user;