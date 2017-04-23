var fs = require('fs');

function filePath() {
    return process.argv[2].toString()
}

function countOfLines(data) {
    return data.toString().split('\n').length - 1
}

fs.readFile(filePath(), function (err, data) {
    if (err)
        console.log('Error!');
    console.log(countOfLines(data));
});

