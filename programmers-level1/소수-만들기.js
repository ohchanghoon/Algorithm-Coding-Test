function solution(nums) {
  const len = nums.length;
  let result = 0;

  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      for (let k = j + 1; k < len; k += 1) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) result += 1;
      }
    }
  }
  return result;
}

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num;
}
