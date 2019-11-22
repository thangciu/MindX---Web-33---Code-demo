const express = require('express');
const fs = require('fs');

const data = require('./data.json');

const user = express.Router();

user.get('/', function(req, res) {
  const query = req.query.search ? req.query.search.toLowerCase() : null;
  if (query) {
    const results = data.filter(user => user.username.toLowerCase().includes(query));
    if (results && results.length > 0) {
      res.json({
        data: results,
        message: 'Success',
        success: true
      });
    } else {
      res.json({
        data: [],
        message: 'Data not exist',
        success: true
      });
    }
  } else {
    res.json({
      data: data,
      message: 'Success',
      success: true
    });
  }
});

user.post('/', function(req, res) {
  console.log(req.body)
  if (!req.body.username) {
    res.json({
      message: 'Username is empty',
      success: false
    })
  } else if (!req.body.password) {
    res.json({
      message: 'Password is empty',
      success: false
    });
  } else {
    const listId = data.map(user => user.id);
    console.log(listId);
    const newId = Math.max(...listId);
    const newUser = {
      id: newId + 1,
      username: req.body.username,
      password: req.body.password
    }
    data.push(newUser);
    fs.writeFile('./data.json', JSON.stringify(data), function(err, data) {
      if (err) {
        res.json({
          message: err,
          success: false
        });
      } else {
        res.json({
          message: 'Save success',
          success: true
        });
      }
    })
  }
});

user.put('/:id', function(req, res) {
  if (!req.params.id) {
    res.json({
      message: 'ID is empty',
      success: false
    });
  } else {
    const userIndex = data.findIndex(function(user) {
      return user.id.toString() === req.params.id
    });
    if (userIndex > -1) {
      const newData = data.map((user, index) => {
        if (userIndex === index) {
          return Object.assign(user, req.body);
        }
        return user;
      });
      fs.writeFile('./data.json', JSON.stringify(newData), function(err, data) {
        if (err) {
          return res.json({
            message: err,
            success: false
          });
        }
        return res.json({
          message: 'Save success',
          success: true
        });
      })
    } else {
      res.json({
        message: 'Data not found',
        success: false
      });
    } 
  }
});

module.exports = user;