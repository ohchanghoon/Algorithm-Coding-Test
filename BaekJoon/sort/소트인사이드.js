const input = `2143`
  .split('')
  .sort((a, b) => b - a)
  .join('');
// const input = require('fs').readFileSync('/dev/stdin').toString().split('').sort((a, b) => b - a);
console.log(input);
