// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const input = [1, 0];
const a = Number(input[0]);
const b = Number(input[1]);

if (a > b) console.log('>');
else if (a < b) console.log('<');
else console.log('==');
