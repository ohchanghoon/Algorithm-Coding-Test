function solution(array, commands) {
  const answer = [];

  let first = 0; // i -> first
  let second = 0; // j -> second
  let target = 0; // k -> target

  for (let m = 0; m < commands.length; m++) {
    first = commands[m][0];
    second = commands[m][1];
    target = commands[m][2];

    let sliced = array.slice(first - 1, second);
    let sorted = sliced.sort((a, b) => a - b);
    // const temp = array.slice(first-1, second).sort((a, b) => a - b);

    answer.push(sorted[target - 1]);
  }
  return answer;
}
