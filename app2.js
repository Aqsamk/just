const http = require('http');
const { url } = require('inspector');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    const fs = require('fs')

    if(url === '/') {

        fs.readFile('message.text',{encoding:'utf-8'},(err,data) => {
            if(err) {
                console.log(err);
            }

        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write(`<h4> ${data}</h4>`)
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end();
        });
    }
    else if (url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk) => {
            console.log(chunk);
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
           
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.text',message);
        })
        
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
})

server.listen(3000);