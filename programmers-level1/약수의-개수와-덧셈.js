function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i += 1) {
    // 자연수가 제곱수이면 약수는 홀수
    // 자연수가 제곱수가 아니면 약수는 짝수
    Math.sqrt(i) % 1 ? (result += i) : (result += -i);
  }
  return result;
}
