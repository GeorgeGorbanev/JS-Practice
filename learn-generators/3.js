function *flat (array) {
  if (Array.isArray(array)){
    for (let index = 0; index < array.length; index++)
      yield* flat(array[index]);
  } else {
    yield array;
  }
}

 var A = [1, [2, [3, 4], 5], 6];

 for (var f of flat(A))
     console.log(f);
