//? find the sum of n natural numbers
/*
example
summation(4) = 10
1+2+3+4 = 10
*/
//*time completely count
// lets calculate the number of times each statement is executed.
// Total count is 4+2 ie n+2 is the input to the function
// if n=10, total count is 10+2

function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(summation(4));
