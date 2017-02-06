var http = require('http'),
    async = require('async');

var requestBody = '',
    count = 0;

async.whilst( ()=> !/meerkat/.test(requestBody.trim()), (done)=>{
      let body = '';
      http.get(process.argv[2], (res)=> {
        res.on('data', (chunk)=> body += chunk.toString());
        res.on('end',  ()=>{
            ++count;
            requestBody = body;
            done();
          }
        );
      }).on('error', done);
  },
  (err)=> (err) ? console.log(err) : console.log(count)
)
