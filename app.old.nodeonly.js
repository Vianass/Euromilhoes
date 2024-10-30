http = require('http');

server = http.createServer();

server.on('request', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
    console.log('Request recebido');
})

server.on('listening', function () {
    console.log('Servidor em funcionamento na porta 3000');
});


server.listen(3000);

