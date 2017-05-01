var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();

function bufferUpCase(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
};

var loud = tr.select('.loud').createStream();

loud.pipe(through(bufferUpCase)).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
