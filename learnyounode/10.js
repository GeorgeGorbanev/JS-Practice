var net = require('net');

var port = Number(process.argv[2]);

server = net.createServer(function (socket) {
    socket.end('');
});

server.listen();