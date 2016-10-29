const fs = require('fs');
const path = require('path');

module.exports = function(folderPath, getExt, cb) {
  fs.readdir(folderPath, (err, fileNames) => {
    if (err) {
      cb(err);
      return console.log(err);
    }
    var filtered = fileNames.filter((fileName) => {
      var ext = path.extname(fileName);
      return ext === '.' + getExt;
    });
    cb(null, filtered);
  });
};
