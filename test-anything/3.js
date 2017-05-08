var test    = require('tape');
var fancify = require(process.argv[2].toString());
 
test('fancify', function (t) {
  t.equal(fancify('This'), '~*~This~*~', 'returns the str wrapped in ~*~' );
  t.equal(fancify('This', true), '~*~THIS~*~','takes an optional second argument that converts the string into ALLCAPS');
  t.equal(fancify('This', true, 'q'),'~q~THIS~q~', 'takes a third optional argument that determines the character in the middle');
  t.end();
});
