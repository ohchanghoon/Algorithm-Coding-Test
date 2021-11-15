// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const input = `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`.split('\n');

const T = input.shift();

for (let i = 0; i < T; i += 1) {
  let sum = 0;

  for (let j = 0; j < input[i].length; j += 1) {
    input[i][j] === '(' ? (sum += 1) : (sum -= 1);
    if (sum < 0) break;
  }
  console.log(sum === 0 ? 'YES' : 'NO');
}
