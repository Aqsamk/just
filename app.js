const http = require('http');

const server = http.createServer((req, res) => {
  
  res.end('Hello, my name is Aqsam\n');
});

server.listen(8000, "127.0.0.1",() => {
    console.log('listning to the port no 8000')
});
