'use strict';

function all(firstPromise, secondPromise) {
  return new Promise((fulfill, reject)=>{
    var counter = 0;
    var out = [];

    firstPromise.then((val)=>{
      out[0] = val;
      counter++;
      if (counter == 2)
        fulfill(out);
    });

    secondPromise.then((val)=> {
      out[1] = val;
      counter++;
      if (counter == 2)
        fulfill(out);
    });
  });
}

all(getPromise1(), getPromise2()).then(console.log);
