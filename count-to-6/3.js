
var inputs = process.argv.splice(2);

var result = `[${inputs.join()}] becomes "${inputs.map((word)=>word[0]).join("")}"`;

console.log(result);
