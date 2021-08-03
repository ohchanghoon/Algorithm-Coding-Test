function solution(nums) {
  const presents = nums.length / 2;
  const maxCase = new Set(nums);

  return presents < maxCase.size ? presents : maxCase.size;
}
