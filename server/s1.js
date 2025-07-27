const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('<b>Hello, World!</b>');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
