const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', function(request, response) {
  response.send('Hello world');
});

router.post('/', function(request, response) {
  const data = request.body.data;

  fs.writeFile('./text.txt', data, function(err, data) {
    if (err) {
      response.json({ message: err, success: false });
    } else {
      response.json({ message: 'File has been writen', success: true });
    }
  });
});

module.exports = router;