var isCoolNumber = require(process.argv[2].toString());
var assert       = require('assert');

assert(isCoolNumber(42) === true, '.isCoolNumber should return true for 42');