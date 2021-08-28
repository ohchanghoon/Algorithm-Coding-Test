const input = `5
1 2 4 8 16`
  .toString()
  .split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [N, arr] = input;
const splitArr = arr.split(' ');
const max = Math.max(...splitArr);
let sum = 0;

for (let i = 0; i < N; i += 1) {
  sum += (splitArr[i] / max) * 100;
}
console.log(sum / N);
