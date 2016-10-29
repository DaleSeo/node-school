const fs = require('fs');
const filePath = process.argv[2];
var buff = fs.readFileSync(filePath);
var result = buff.toString().split('\n').length - 1;
console.log(result);
