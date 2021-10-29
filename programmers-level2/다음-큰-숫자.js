function solution(n) {
  const numCnt = n
    .toString(2)
    .split('')
    .filter((el) => '1' === el).length;

  while ((n += 1)) {
    const bigNumCnt = n
      .toString(2)
      .split('')
      .filter((el) => '1' === el).length;

    if (bigNumCnt === numCnt) {
      break;
    }
  }
  return n;
}
