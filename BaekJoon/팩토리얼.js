// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const n = Number(input);
// let n = 10;

// function factorial(n) {
//   if (n <= 1) return 1;
//   return n * factorial(n - 1);
// }
// console.log(factorial(n));

const fs = require('fs');
// const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
const input = 5;

function factorial(N) {
  if (N === 1 || N === 0) return 1;
  return N * factorial(N - 1);
}
console.log(factorial(input));
