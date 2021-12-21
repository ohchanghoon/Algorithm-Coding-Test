function solution(s, n) {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let answer = '';

  s.split('').map((alphabet) => {
    if (alphabet === ' ') return (answer += ' ');

    const textArr = lower.includes(alphabet) ? lower : upper;
    let idx = textArr.indexOf(alphabet) + n;

    if (idx >= textArr.length) idx -= textArr.length;
    answer += textArr[idx];
  });
  return answer;
}

// for (let i = 0; i < s.length; i += 1) {
//   const text = s[i];

//   if (text === ' ') {
//     answer += ' ';
//     continue;
//   }
//   const textArr = lower.includes(text) ? lower : upper;
//   const pushedText = textArr.indexOf(text) + n;

//   answer +=
//     pushedText >= textArr.length
//       ? textArr[pushedText - textArr.length]
//       : textArr[pushedText];
// }
// return answer;
