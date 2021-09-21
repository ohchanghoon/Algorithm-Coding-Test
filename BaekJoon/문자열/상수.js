const input = `839 237`.toString().split(' ');
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

// 1)
const [A, B] = input.map((el) => [...el].reverse().join(''));
console.log(Math.max(A, B));

// 2)
const [A, B] = input;
const reverseA = Number(A.split('').reverse().join(''));
const reverseB = Number(B.split('').reverse().join(''));
console.log(reverseA > reverseB ? reverseA : reverseB);
