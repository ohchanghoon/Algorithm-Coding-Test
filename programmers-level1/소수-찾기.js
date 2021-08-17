function solution(n) {
  const nArr = new Array(n).fill(1);
  nArr[0] = 0;
  for (let i = 2; i * i <= n; i++) {
    for (let j = i * i; j <= n; j += i) {
      nArr[j - 1] = 0;
    }
  }

  return nArr.filter((el) => el === 1).length;
}
