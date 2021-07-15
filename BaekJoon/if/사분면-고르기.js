// const input = [[9], [-13]];
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);

  if (num1 > 0 && num2 > 0) {
    console.log(1);
  } else if (num1 < 0 && num2 > 0) {
    console.log(2);
  } else if (num1 < 0 && num2 < 0) {
    console.log(3);
  } else if (num1 > 0 && num2 < 0) {
    console.log(4);
  }

  process.exit();
});
