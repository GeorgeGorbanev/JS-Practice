var fs = require('fs');

var dirPath = process.argv[2].toString();
var filterExtension = process.argv[3].toString();

fs.readdir(dirPath, function (err, data) {
    if (err)
        return console.log(err);

    var files = data.toString().split(',');
    var filesFiltered = [];

    files.forEach(function (fileName) {
        var splited = fileName.split('.');
        var extension = splited[splited.length - 1];

        if ((extension == filterExtension) && (fileName != extension))
            filesFiltered.push(fileName);
    });

    filesFiltered.forEach((fileName) => console.log(fileName));
});