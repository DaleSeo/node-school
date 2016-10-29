const fs = require('fs');
const path = require('path');
const folderPath = process.argv[2];
const extention = process.argv[3];

fs.readdir(folderPath, (err, fileNames) => {
  var filtered = fileNames.filter((fileName) => {
    var ext = path.extname(fileName);
    return ext === '.' + extention;
  })
  .forEach(val => console.log(val));
});
