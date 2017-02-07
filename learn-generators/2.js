function *factorial(n){
  let currentFactorial = 1;
  yield currentFactorial;
  for (current = 2; current <= n; current++)
       yield currentFactorial = currentFactorial * current;
}

for (var n of factorial(5)) {
  console.log(n)
}
