const myModule = require('./module.js');
const folderPath = process.argv[2];
const getExt = process.argv[3];
myModule(folderPath, getExt, (err, filteredFiles) => {
  if (err) { return console.log(err); }
  filteredFiles.forEach(fileName => console.log(fileName));
});
