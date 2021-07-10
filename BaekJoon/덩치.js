// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const input = ['5', '55 185', '58 183', '88 186', '60 175', '46 155'];

const T = input.shift(); // 횟수 출력
const kgCmTable = input.map((kgCm) =>
  kgCm.split(' ').map((num) => Number(num))
);
const rank = [];

for (let i = 0; i < T; i += 1) {
  let cnt = 0;
  for (let j = 1; j < T; j += 1) {
    if (i !== j) {
      if (
        kgCmTable[i][0] < kgCmTable[j][0] &&
        kgCmTable[i][1] < kgCmTable[j][1]
      ) {
        cnt++;
      }
    }
  }
  rank.push(cnt + 1);
}

console.log(rank.join(' '));
