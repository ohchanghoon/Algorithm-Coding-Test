function solution(x, n) {
  const answer = [];
  for (let i = 1; i <= n; i += 1) {
    answer.push(x * i);
  }
  return answer;
}
