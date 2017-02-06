let http = require('http'),
    async = require('async'),
    qs = require('querystring');

let hostname = process.argv[2],
    port     = process.argv[3],
    url      = 'http://' +  hostname + ':' + port;

async.series({
   post: function(done){
        async.times(5, (n, next)=> _addUser(++n, (err)=> next(err)),
          function next(err){
            (err) ? done(err) : done(null, 'saved');
          }
        );
   },
   get: function(done){
     http.get(url + '/users', function(res){
       var body = "";
       res.on('data', (chunk)=> body += chunk.toString());
       res.on('end',  ()=>done(null, body));
     }).on('error', done);
   }
  },
  function done(err, result){
    (err) ? console.log(err) : console.log(result.get);
  }
);

function _addUser(user_id, next){
  let postdata = JSON.stringify({'user_id': user_id}),
  opts = {
    hostname: hostname,
    port: port,
    path: '/users/create',
    method: 'POST',
    headers: {'Content-Length': postdata.length}
  };
  let req = http.request(opts, (res)=>{
    res.on('data',(chunk)=>{});
    res.on('end', ()=>next());
  });
  req.on('error', (err)=>next(err));
  req.write(postdata);
  req.end();
}
