const input = `6
6
9
7
6
4
6`.split('\n');

// const fs = require('fs');
// const input = fs
//   .readFileSync('/dev/stdin')
//   .toString()
//   .split('\n')
//   .map((v) => +v);

// const revIn = input.reverse();
// let cnt = 1;

// for (let i = 1; i < revIn.length; i++) {
//   let max = revIn[0];
//   if (max < revIn[i]) {
//     max = revIn[i];
//     cnt += 1;
//   }
// }
// console.log(cnt);

// console.log(input.reverse());

let max = 0;
let cnt = 0;

for (let i = input.length - 1; i >= 0; i -= 1) {
  if (input[i] > max) {
    cnt += 1;
    max = input[i];
  }
}
console.log(cnt);
