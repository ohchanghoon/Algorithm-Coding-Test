function solution(people, limit) {
  people.sort((a, b) => b - a);
  let boatNum = 0;

  for (let i = 0, j = people.length - 1; i <= j; i += 1) {
    if (people[i] + people[j] > limit) boatNum += 1;
    else {
      boatNum += 1;
      j -= 1;
    }
  }
  return boatNum;
}
