console.log(arraySum(argvNumbers()));

function argvNumbers(){
    return process.argv.splice(2)
}

function arraySum(array) {
    var sum = 0;
    array.forEach(function (item) {
        sum = sum + Number(item);
    });
    return sum
}