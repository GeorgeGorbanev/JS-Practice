var duplexer = require('duplexer2');
var through = require('through2').obj;

function transformStream(counter) {
    var counts = {};
    var input = through(function(chunk, _, next) {
        counts[chunk.country] = (counts[chunk.country] || 0) + 1;
        next();
    }, function(done) {
        counter.setCounts(counts);
        done();
    });
    return duplexer({objectMode: true}, input, counter);
};

module.exports = transformStream;