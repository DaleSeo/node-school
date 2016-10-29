const fs = require('fs');
const filePath = process.argv[2];
fs.readFile(filePath, (err, buff) => {
  if (err) {
    return console.log(err);
  }
  var result = buff.toString().split('\n').length - 1;
  console.log(result);
});
