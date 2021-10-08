const input = `2
3 ABC
5 /HTP`
  .toString()
  .split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = input.shift();

for (let i = 0; i < T; i += 1) {
  let answer = '';

  const [num, str] = input[i].split(' ');
  for (let j = 0; j < str.length; j += 1) {
    answer += str[j].repeat(num);
  }
  console.log(answer);
}
