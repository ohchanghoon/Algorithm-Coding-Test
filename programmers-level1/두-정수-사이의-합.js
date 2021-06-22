function solution(a, b) {
  let sum = 0;
  let maxNum = Math.max(a, b);
  let minNum = Math.min(a, b);

  for (let i = minNum; i <= maxNum; i++) sum += i;

  return sum;
}
