var http = require('http');
var through = require('through2');

function upCaseBuffer(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
};

var port = Number(process.argv[2]);

var server = http.createServer(function(req, res) {
    (req.method === 'POST') ? req.pipe(through(upCaseBuffer)).pipe(res) : res.end('Wrong method\n');
});

server.listen(port);
