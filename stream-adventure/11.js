var duplexer = require('duplexer2');
var spawn    = require('child_process').spawn;

function myDuplexer(cmd, args) {
    var proc = spawn(cmd, args);
    return duplexer({objectMode: true}, proc.stdin, proc.stdout);
};

module.exports = myDuplexer;