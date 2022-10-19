function solution(array, height) {
  return array.filter((tall) => tall > height).length;
}
