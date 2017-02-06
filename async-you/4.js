var http = require('http'),
    async = require('async');

async.map(process.argv.slice(2), function(url, done){
    let body = '';
    http.get(url, function(res){
      res.on('data', (chunk)=> body += chunk.toString());
      res.on('end', ()=>done(null, body));
    });
  },
  function done(err, results){
    (err) ? console.log(err) : console.log(results);
  }
);
