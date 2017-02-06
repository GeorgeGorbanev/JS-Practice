var http = require('http'),
    async = require('async');

async.each(process.argv.slice(2), function(item, done){
    http.get(item, function(res){
        res.on('data', (chunk)=>{});
        res.on('end', ()=>done(null));
    }).on('error', (err)=>done(err));
  },
  (err)=> if(err) console.error(err)
);
