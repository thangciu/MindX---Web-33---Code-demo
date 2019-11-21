const fs = require('fs');

const exportedModule = {
  readFile(request, response) {
    fs.readFile('./text.txt', function(err, data) {
      if (err) {
        response.end(err);
      } else {
        response.end(data);
      }
    })
  }
}

module.exports = exportedModule;