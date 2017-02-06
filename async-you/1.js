var fs = require('fs')
    http = require('http')
    async = require('async');

async.waterfall([
  function(done){
    fs.readFile(process.argv[2], (err, data)=> (err) ? done(err): done(null, data));
  },
  function(data, done){
    var body = '';
    http.get(data.toString().trimRight(), function(res){
      res.on('data', (chunk)=> body += chunk.toString() );
      res.on('end',  (chunk)=> done(null, body) );
    }).on('error', (e)=>done(e));
  }
  ],
  function done(err, result){
    if (err) return console.error(err);
    console.log(result);
  }
);
