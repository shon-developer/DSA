// TODO Problem statement
//? Give a number "n" . Find the first "n" elements of the fibonacci sequence

// *In mathematics, the fibonacci sequence is a sequence in which each number is the sum of the two proceeding ones.

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i + 1] + fib[1 - 2];
  }
  return fib;
}
console.log(fibonacci(2));

// determine the big O
// big O =(n) linear
