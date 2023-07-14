const http = require('http');
const port = 3001

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
}).listen(port, console.log("port on 3001"))