var http = require('http');

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var contents = ['', '', ''];

var ready = 0;

urls.forEach(function (url, index) {
    http.get(url, function (response) {
        response.on('data', function (chunk) {
            contents[index] = contents[index].concat(chunk.toString());
        });
        response.on('end', function () {
            if (ready == 2)
                onReady();
            else
                ready += 1;
        });
    });
});

function onReady() {
    contents.forEach((content)=>console.log(content));
}