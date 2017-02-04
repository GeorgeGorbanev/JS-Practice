
var numbers = process.argv.slice(2);

console.log(`The minimum of [${numbers.join()}] is ${Math.min(...numbers)}`);
