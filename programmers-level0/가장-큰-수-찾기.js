function solution(array) {
  const max = Math.max(...array);
  const idx = array.indexOf(max);

  return [max, idx];
}
