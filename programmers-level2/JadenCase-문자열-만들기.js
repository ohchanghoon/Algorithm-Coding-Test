function solution(s) {
  const str = s.toLowerCase().split(' ');
  const answer = [];

  str.forEach((word) => {
    answer.push(word.slice(0, 1).toUpperCase() + word.slice(1));
  });

  return answer.join(' ');
}
