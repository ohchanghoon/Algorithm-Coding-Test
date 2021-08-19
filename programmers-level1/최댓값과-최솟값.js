function solution(s) {
  let trim = s.split(' ');
  let max = Math.max.apply(null, trim);
  let min = Math.min.apply(null, trim);
  return `${min} ${max}`;
}
