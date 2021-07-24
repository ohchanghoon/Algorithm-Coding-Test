// reverse() 사용
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// const input = `2
// I am happy today
// We want to win the first prize`.split('\n');

const T = input.shift();
for (let i = 0; i < T; i += 1) {
  const a = [];
  input[i] = input[i].split(' ');
  for (let j = 0; j < input[i].length; j += 1) {
    a.push(input[i][j].split('').reverse().join(''));
  }
  console.log(a.join(' '));
}
