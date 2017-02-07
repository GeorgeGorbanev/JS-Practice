function *range(from, to) {
  for (var index = from; index <= to; index++)
        yield index;  
}

for (var r of range(5, 10)) {
  console.log( r );
}
