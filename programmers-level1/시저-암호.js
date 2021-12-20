function solution(s, n) {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let answer = '';

  for (let i = 0; i < s.length; i += 1) {
    const text = s[i];

    if (text === ' ') {
      answer += ' ';
      continue;
    }
    const textArr = lower.includes(text) ? lower : upper;
    const pushedText = textArr.indexOf(text) + n;

    answer +=
      pushedText >= textArr.length
        ? textArr[pushedText - textArr.length]
        : textArr[pushedText];
  }
  return answer;
}
