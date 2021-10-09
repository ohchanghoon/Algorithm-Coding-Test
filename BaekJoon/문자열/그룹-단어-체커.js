// const input = `4
// aba
// abab
// abcabc
// a`
//   .toString()
//   .split('\n');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = input.shift();
let cnt = N;

for (let i = 0; i < N; i += 1) {
  const checkedArr = [];
  const word = input[i].split('');

  for (let j = 0; j < word.length; j += 1) {
    if (!checkedArr.includes(word[j])) {
      checkedArr.push(word[j]);
      continue;
    }
    if (word[j - 1] === word[j]) {
      checkedArr.push(word[j]);
      continue;
    }
    cnt -= 1;
    break;
  }
}
console.log(cnt);
