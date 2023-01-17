const http = require('http');
const { buffer } = require('stream/consumers');

const server = http.createServer((req, res) =>{
  const url = req.url;
  const method = req.method;
  const fs = require('fs')
  if(url === '/'){
    
    fs.readFile('message.text',{encoding:'utf-8'},(err,data) => {
        if(err) {
            console.log(err);
        }
        console.log(`data from the file` + data)
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write(`<body>${data}</body>`)
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end();
    })
   
    
  }
  if(url === '/message' && method === 'POST' ){
    const body = [];
    req.on('data',(chunk) => {
        console.log(chunk)
       body.push(chunk);
    })
    return req.on('end', () => {
        const parseBody = Buffer.concat(body).toString()
        console.log(parseBody);
        const message = parseBody.split('=')[1];
        fs.writeFile('message.text',message, (err) => {
            if(err){console.log(err)}
            console.log(`indise fs.writefile`);
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
        });
    })
  }
  else{
    res.setHeader('Content-Type','text/html')
    res.write('<html>');

  }
 
  res.setHeader('Content-Type','text/html');
  res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Hello from my Node.js Server</body>')
  res.write('</html>')
  res.end();
});

server.listen(3000);