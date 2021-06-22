function solution(numbers) {
  let sum = 0;
  let sumArr = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++)
      sumArr.push(numbers[i] + numbers[j]);
  }

  return [...new Set(sumArr)].sort((a, b) => a - b);
}
