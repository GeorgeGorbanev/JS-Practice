var fs = require('fs');

function fileContent() {
    return fs.readFileSync(process.argv[2]).toString()
}

function countOfLines(string) {
    return string.split('\n').length - 1
}

console.log(countOfLines(fileContent()));
