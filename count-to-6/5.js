

var userArray = process.argv.slice(2);

var userObject = {};
[ , userObject.username, userObject.email] = userArray;

console.log(userObject);
