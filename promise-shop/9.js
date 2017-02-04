'use strict'

function parsePromised(someJson){
  return new Promise( (fulfill, reject)=>{
    try {
      fulfill(JSON.parse(someJson));
    }
    catch(error){
      console.log(error);
    }
   }
  );
};

parsePromised(process.argv[2]).then(null, null);
