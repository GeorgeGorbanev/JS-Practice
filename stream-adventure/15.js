var crypto = require('crypto');
var tar    = require('tar');
var zlib   = require('zlib');
var concat = require('concat-stream');

var cipher = process.argv[2];
var pass   = process.argv[3];

var crypter = crypto.createDecipher(cipher, pass);
var zipper  = zlib.createGunzip();
var parser  = tar.Parse();

parser.on('entry', function (e) {
    if (e.type !== 'File') return;
      
    var hasher = crypto.createHash('md5', { encoding: 'hex' });
    e.pipe(hasher).pipe(concat( (hash) => console.log(hash + ' ' + e.path) ));
});


process.stdin.pipe(crypter).pipe(zipper).pipe(parser);