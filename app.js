const http = require('http');

/*const server = http.createServer((req, res) => {
  
 console.log(req.url,req.method,req.headers)
  res.setHeader('Content-Type','text/html');
  res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Hello from my Node.js Server</body>')
  res.write('</html>')
  res.end();
});

server.listen(3000);*/

const server = http.createServer((req,res) => {
  if(req.url === '/home'){
    res.end('welcome home');
  }
  else if(req.url === '/about'){
    res.end('welcome to about us page')
  }
  else{
    res.end('welcome to my node js page')
  }
})

server.listen(3000);