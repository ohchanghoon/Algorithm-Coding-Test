function solution(x) {
  const xArr = x
    .toString()
    .split('')
    .map((el) => +el);
  let sum = 0;

  xArr.forEach((x) => (sum += x));
  return x % sum ? false : true;

  // return x %
  //   x
  //     .toString()
  //     .split('')
  //     .reduce((a, b) => +a + +b)
  //   ? false
  //   : true;
}
