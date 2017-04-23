var fs = require('fs');

function dirFilter(dir, ext, callback) {
    fs.readdir(dir, function (err, data) {
        if (err)
            return callback(err);

        var files = data.toString().split(',');
        var filesFiltered = [];

        files.forEach(function (fileName) {
            var splited = fileName.split('.');
            var extension = splited[splited.length - 1];

            if ((extension == ext) && (fileName != extension))
                filesFiltered.push(fileName);
        });

        callback(null, filesFiltered);
    });
}

module.exports = dirFilter;