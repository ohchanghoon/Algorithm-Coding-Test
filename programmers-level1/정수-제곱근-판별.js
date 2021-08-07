function solution(n) {
  let squarRoot = Math.sqrt(n);
  return squarRoot % 1 ? -1 : Math.pow(squarRoot + 1, 2);
}
