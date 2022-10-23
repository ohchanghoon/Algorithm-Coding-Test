function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => Number(acc) + Number(cur), 0);
}
