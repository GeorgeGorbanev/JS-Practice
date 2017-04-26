var net = require('net');

var port = Number(process.argv[2]);

server = net.createServer(function (socket) {
    socket.end(formatedDateTime() + '\n');
});

server.listen(port);

function formatedDateTime() {
    var date = new Date();
    var YYYY = date.getFullYear(),
        MM   = formatInt(date.getMonth()+1, 2),
        DD   = formatInt(date.getDate(), 2),
        HH   = formatInt(date.getHours(), 2),
        mm   = formatInt(date.getMinutes(), 2);
    return`${YYYY}-${MM}-${DD} ${HH}:${mm}`
}

function formatInt(int, length) {
    var intString = int.toString();
    while (intString.length < length)
        intString = '0' + intString;
    return intString;
}