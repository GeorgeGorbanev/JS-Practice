var through = require('through2');
var split   = require('split');

var even = false;

process.stdin.pipe(split())
             .pipe(through(
                function(buffer, encoding, next) {
                  if (even)
                    this.push(buffer.toString().toUpperCase() + '\n');
                  else
                    this.push(buffer.toString().toLowerCase() + '\n');
                  even = !even;
                  next();
                },
                function(done) {
                  done();
                }
              ))
             .pipe(process.stdout);
