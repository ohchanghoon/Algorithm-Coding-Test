const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
// const input = 2012;
// const year = input;

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log(1);
} else {
  console.log(0);
}

// (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
//   ? console.log(1)
//   : console.log(0);
