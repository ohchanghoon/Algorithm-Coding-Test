function solution(s) {
  const even = s.length / 2;
  const odd = Math.floor(s.length / 2);

  return s.length % 2 ? s[odd] : s[even - 1] + s[even];
}
