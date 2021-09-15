function solution(numbers) {
  let sum = 0;
  for (let i = 0; i < 10; i += 1) {
    numbers.includes(i) ? (sum += 0) : (sum += i);
  }
  return sum;
}
