let input = parseInt(prompt("Enter an interval for prime numbers"));
var primeNumbers =[];
for (var counter = 2; counter <= input; counter++) {
  var notPrime = false;
  for (var i = 2; i <= counter; i++) {
    if (counter % i === 0 && i !== counter) {
      notPrime = true;
    }
  }
  if (notPrime === false) {
    primeNumbers.push(counter);
  }
}
console.log(primeNumbers);