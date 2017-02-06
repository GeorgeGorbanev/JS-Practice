var http = require('http')
    async = require('async');

async.series({
     requestOne: (done)=>bodyFromURL(process.argv[2], done),
     requestTwo: (done)=>bodyFromURL(process.argv[3], done)
   },
   function done(err, result){
     if (err) return console.error(err);
     console.log(result);
   }
);

function bodyFromURL(url, done) {
  let body = '';
  http.get(url, (res)=>{
    res.on('data', (chunk)=> body += chunk.toString() );
    res.on('end',  (chunk)=> done(null, body) );
  }).on('error', (e)=>done(e));
}


// не dry
// async.series({
//     requestOne: function(done){
//       let body = '';
//       http.get(process.argv[2], function(res){
//         res.on('data', (chunk)=> body += chunk.toString() );
//         res.on('end',  (chunk)=> done(null, body) );
//       }).on('error', (e)=>done(e));
//     },
//     requestTwo: function(done){
//       let body = '';
//       http.get(process.argv[3], function(res){
//         res.on('data', (chunk)=> body += chunk.toString() );
//         res.on('end',  (chunk)=> done(null, body) );
//       }).on('error', (e)=>done(e));
//     }
//   }, function(err, results){
//     console.log(results);
//   }
// );
