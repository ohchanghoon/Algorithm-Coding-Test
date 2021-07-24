let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = Number(input.shift());
const stack = [];
let result = 0;

for (let i = 0; i < T; i += 1) {
  const value = Number(input[i]);

  if (value === 0) {
    stack.pop();
  } else {
    stack.push(value);
  }
}

for (let j = 0; j < stack.length; j += 1) {
  result += stack[j];
}
console.log(result);
