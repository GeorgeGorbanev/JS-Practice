var req = require('request');

var url = 'http://localhost:8099';

var reqStream = req.post(url);

process.stdin.pipe(reqStream).pipe(process.stdout);
