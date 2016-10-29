const http = require('http');
const fs = require('fs');

const port = +process.argv[2];
const filePath = process.argv[3];

const server = http.createServer((request, response) => {
  let srcStream = fs.createReadStream(filePath);
  srcStream.pipe(response);
});

server.listen(port);
