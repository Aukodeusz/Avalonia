const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  const filePath = new URL(req.url, `http://${req.headers.host}`).searchParams.get('file');
  if (!filePath) return res.end('No file specified');

  const fullPath = path.join(__dirname, filePath);

  fs.createReadStream(fullPath)
    .on('error', () => {
      res.writeHead(404);
      res.end('Jarosław Strzelecki');
    })
    .pipe(res);
}).listen(3000, () => console.log('Serwer nasłuchiwuje na porcie 3000'));










//http://localhost:3000/?file=Data_Logger.js