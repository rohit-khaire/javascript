//res.writeHead => nothing to show in frontend = set background status no. like 200=OK, 404=Error, and header =>content-type like text/plain or text/html
//res.end(optional) => End connection(req and res) by showing this msg, send response and close connection
//req.url to get current url
//res.write => To write on screen (fe)


const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<center><h1>Rohit Khaire</h1><p>Welcome to HTML response</p></center>');
});

server.listen(3000,()=>console.log("http://localhost:3000"));
