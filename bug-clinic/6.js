require('stackup');
var domain = require("domain");

var readFile = require("fs").readFile;

function scenario(jsonPath, cb) {
  var dmn = domain.create();
  dmn.on("error", cb);

  dmn.run(function () {
    readFile(jsonPath, {encoding : "utf8"}, function (error, contents) {
      cb(error, JSON.parse(contents));
    });
  });
}

mgitodule.exports = scenario;
