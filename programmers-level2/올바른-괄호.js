function solution(s) {
  const arr = [...s];
  let left = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[0] === ')') return false;
    if (arr[i] === '(') left += 1;
    else if (left > 0 && arr[i] === ')') left -= 1;
  }
  return left === 0 ? true : false;
}
