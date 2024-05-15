// Task 2
// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, Welcome to My Node Checkpoint!!!!</h1>\n');
});

server.listen(3002, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3002/');
});
