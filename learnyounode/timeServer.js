const net = require('net');

const server = net.createServer(socket => {
  let result = formatTime(new Date());
  socket.write(result);
  socket.end();
});

server.listen(+process.argv[2])

function formatTime(date) {
  let year = date.getFullYear();
  let month = zeroFill(date.getMonth() + 1);
  let day = zeroFill(date.getDate());
  let hour = zeroFill(date.getHours());
  let minute = zeroFill(date.getMinutes());
  return `${year}-${month}-${day} ${hour}:${minute}
`;
}

function zeroFill(num) {
  return (num < 10 ? '0' : '') + num;
}
