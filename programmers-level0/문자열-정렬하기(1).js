function solution(my_string) {
  const regExp = /[0-9]/g;
  return my_string
    .match(regExp)
    .map((num) => Number(num))
    .sort((a, b) => a - b);
}
