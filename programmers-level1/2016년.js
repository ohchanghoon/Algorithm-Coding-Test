function solution(a, b) {
  const date = new Date(`2016, ${a}, ${b}`);
  let day = (date + '').split(' ');
  let answer = day[0].toUpperCase();
  return answer;
}
