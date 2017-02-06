var http = require('http'),
    async = require('async');

async.reduce(['one', 'two', 'three'], 0, function(memo, item, done){
    let body = '';
    http.get(process.argv[2] + "?number=" + item, function(res){
      res.on('data', (chunk)=> body += chunk.toString());
      res.on('end',  ()=> done(null, memo + Number(body)) );
    }).on('error', done);
  },
  function done(err, result){
    (err) ? console.log(err) : console.log(result);
  }
);
