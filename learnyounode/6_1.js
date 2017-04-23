var dirFilter = require('./6_2');

var dir = process.argv[2].toString();
var ext = process.argv[3].toString();

dirFilter(dir, ext, function (err, data) {
    if (err)
        return console.error('Error: ', err);
    data.forEach((fileName) => console.log(fileName));
});