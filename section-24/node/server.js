const http = require('http');

const server = http.createServer((request,response) => {
    response.setHeader('content-type', 'text/html');
    response.end(`<h1>Hellooo</h1>
                  <p>It works</p>`);
})

server.listen(3000);